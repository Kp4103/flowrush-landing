<?php

function flowrush_create_contact_post_type() {
    register_post_type('contact_inquiry', array(
        'labels' => array(
            'name' => 'Contact Inquiries',
            'singular_name' => 'Contact Inquiry',
            'menu_name' => 'Contact Forms',
            'add_new' => 'Add New',
            'add_new_item' => 'Add New Inquiry',
            'edit_item' => 'Edit Inquiry',
            'view_item' => 'View Inquiry',
            'all_items' => 'All Inquiries',
            'search_items' => 'Search Inquiries'
        ),
        'public' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_position' => 25,
        'menu_icon' => 'dashicons-email-alt',
        'capability_type' => 'post',
        'supports' => array('title', 'editor'),
        'show_in_rest' => false
    ));
}
add_action('init', 'flowrush_create_contact_post_type');

function flowrush_handle_contact_form() {
    $allowed_origins = array(
        'https://your-vercel-app.vercel.app',
        'http://localhost:3000',
        'https://flowrush.vercel.app'
    );
    
    $origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
    
    if (in_array($origin, $allowed_origins)) {
        header('Access-Control-Allow-Origin: ' . $origin);
    }
    
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    header('Access-Control-Allow-Credentials: true');
    
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit;
    }
    
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        wp_send_json_error(array('message' => 'Only POST requests allowed'), 405);
        return;
    }
    
    $json_input = file_get_contents('php://input');
    $data = json_decode($json_input, true);
    
    if (empty($data['fullName']) || empty($data['email']) || empty($data['message'])) {
        wp_send_json_error(array('message' => 'Name, email, and message are required fields'));
        return;
    }
    
    $full_name = sanitize_text_field($data['fullName']);
    $email = sanitize_email($data['email']);
    $company = sanitize_text_field($data['companyName'] ?? '');
    $city = sanitize_text_field($data['city'] ?? '');
    $country = sanitize_text_field($data['country'] ?? '');
    $whatsapp = sanitize_text_field($data['whatsappNumber'] ?? '');
    $message = sanitize_textarea_field($data['message']);
    
    if (!is_email($email)) {
        wp_send_json_error(array('message' => 'Please provide a valid email address'));
        return;
    }
    
    $post_title = $full_name;
    if (!empty($company)) {
        $post_title .= ' - ' . $company;
    }
    
    $post_data = array(
        'post_type' => 'contact_inquiry',
        'post_title' => $post_title,
        'post_content' => $message,
        'post_status' => 'private',
        'post_author' => 1,
        'meta_input' => array(
            'contact_name' => $full_name,
            'contact_email' => $email,
            'contact_company' => $company,
            'contact_city' => $city,
            'contact_country' => $country,
            'contact_whatsapp' => $whatsapp,
            'contact_ip' => $_SERVER['REMOTE_ADDR'] ?? '',
            'contact_user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? '',
            'contact_submitted_at' => current_time('mysql'),
            'contact_status' => 'new'
        )
    );
    
    $post_id = wp_insert_post($post_data);
    
    if (is_wp_error($post_id)) {
        error_log('Flowrush Contact Form Error: ' . $post_id->get_error_message());
        wp_send_json_error(array('message' => 'Failed to save your inquiry. Please try again.'));
        return;
    }
    
    if ($post_id) {
        $admin_email = get_option('admin_email');
        $site_name = get_bloginfo('name');
        
        $subject = sprintf('[%s] New Contact Form Submission from %s', $site_name, $full_name);
        
        $email_message = sprintf(
            "New contact form submission received:\n\n" .
            "Name: %s\n" .
            "Email: %s\n" .
            "Company: %s\n" .
            "Location: %s, %s\n" .
            "WhatsApp: %s\n" .
            "Message:\n%s\n\n" .
            "---\n" .
            "View in WordPress Admin: %s\n" .
            "Submitted: %s",
            $full_name,
            $email,
            $company ?: 'Not provided',
            $city ?: 'Not provided',
            $country ?: 'Not provided', 
            $whatsapp ?: 'Not provided',
            $message,
            admin_url('post.php?post=' . $post_id . '&action=edit'),
            current_time('F j, Y \a\t g:i A')
        );
        
        $headers = array(
            'From: ' . $site_name . ' <noreply@' . parse_url(home_url(), PHP_URL_HOST) . '>',
            'Reply-To: ' . $full_name . ' <' . $email . '>',
            'Content-Type: text/plain; charset=UTF-8'
        );
        
        wp_mail($admin_email, $subject, $email_message, $headers);
        
        $auto_reply_subject = 'Thank you for contacting ' . $site_name;
        $auto_reply_message = sprintf(
            "Hi %s,\n\n" .
            "Thank you for reaching out to us! We've received your inquiry and will get back to you within 24 hours.\n\n" .
            "Your message:\n%s\n\n" .
            "Best regards,\n" .
            "The Flowrush Team\n\n" .
            "---\n" .
            "This is an automated response. Please do not reply to this email.",
            $full_name,
            $message
        );
        
        wp_mail($email, $auto_reply_subject, $auto_reply_message, array('From: ' . $site_name . ' <noreply@' . parse_url(home_url(), PHP_URL_HOST) . '>'));
        
        wp_send_json_success(array(
            'message' => 'Thank you! Your inquiry has been submitted successfully. We\'ll get back to you soon.',
            'id' => $post_id
        ));
    } else {
        wp_send_json_error(array('message' => 'Failed to save your inquiry. Please try again.'));
    }
}

add_action('rest_api_init', function() {
    register_rest_route('flowrush/v1', '/contact', array(
        'methods' => 'POST',
        'callback' => 'flowrush_handle_contact_form',
        'permission_callback' => '__return_true',
        'args' => array()
    ));
});

function flowrush_contact_columns($columns) {
    $columns = array(
        'cb' => $columns['cb'],
        'title' => 'Name & Company',
        'contact_email' => 'Email',
        'contact_location' => 'Location',
        'contact_status' => 'Status',
        'date' => 'Submitted'
    );
    return $columns;
}
add_filter('manage_contact_inquiry_posts_columns', 'flowrush_contact_columns');

function flowrush_contact_column_content($column, $post_id) {
    switch ($column) {
        case 'contact_email':
            $email = get_post_meta($post_id, 'contact_email', true);
            if ($email) {
                echo '<a href="mailto:' . esc_attr($email) . '">' . esc_html($email) . '</a>';
            }
            break;
        case 'contact_location':
            $city = get_post_meta($post_id, 'contact_city', true);
            $country = get_post_meta($post_id, 'contact_country', true);
            if ($city || $country) {
                echo esc_html(trim($city . ', ' . $country, ', '));
            } else {
                echo '—';
            }
            break;
        case 'contact_status':
            $status = get_post_meta($post_id, 'contact_status', true);
            $status_color = $status === 'new' ? '#e74c3c' : '#27ae60';
            echo '<span style="color: ' . $status_color . '; font-weight: bold;">' . ucfirst($status ?: 'new') . '</span>';
            break;
    }
}
add_action('manage_contact_inquiry_posts_custom_column', 'flowrush_contact_column_content', 10, 2);

function flowrush_add_contact_meta_box() {
    add_meta_box(
        'flowrush_contact_details',
        'Contact Details',
        'flowrush_contact_meta_box_callback',
        'contact_inquiry',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'flowrush_add_contact_meta_box');

function flowrush_contact_meta_box_callback($post) {
    $name = get_post_meta($post->ID, 'contact_name', true);
    $email = get_post_meta($post->ID, 'contact_email', true);
    $company = get_post_meta($post->ID, 'contact_company', true);
    $city = get_post_meta($post->ID, 'contact_city', true);
    $country = get_post_meta($post->ID, 'contact_country', true);
    $whatsapp = get_post_meta($post->ID, 'contact_whatsapp', true);
    $submitted_at = get_post_meta($post->ID, 'contact_submitted_at', true);
    $ip = get_post_meta($post->ID, 'contact_ip', true);
    $status = get_post_meta($post->ID, 'contact_status', true);
    
    ?>
    <table class="form-table">
        <tr>
            <th><label for="contact_name">Name:</label></th>
            <td><strong><?php echo esc_html($name); ?></strong></td>
        </tr>
        <tr>
            <th><label for="contact_email">Email:</label></th>
            <td><a href="mailto:<?php echo esc_attr($email); ?>"><?php echo esc_html($email); ?></a></td>
        </tr>
        <?php if ($company): ?>
        <tr>
            <th><label for="contact_company">Company:</label></th>
            <td><?php echo esc_html($company); ?></td>
        </tr>
        <?php endif; ?>
        <?php if ($city || $country): ?>
        <tr>
            <th><label for="contact_location">Location:</label></th>
            <td><?php echo esc_html(trim($city . ', ' . $country, ', ')); ?></td>
        </tr>
        <?php endif; ?>
        <?php if ($whatsapp): ?>
        <tr>
            <th><label for="contact_whatsapp">WhatsApp:</label></th>
            <td><a href="https://wa.me/<?php echo esc_attr(preg_replace('/[^0-9]/', '', $whatsapp)); ?>" target="_blank"><?php echo esc_html($whatsapp); ?></a></td>
        </tr>
        <?php endif; ?>
        <tr>
            <th><label for="contact_submitted">Submitted:</label></th>
            <td><?php echo esc_html($submitted_at ? date('F j, Y \a\t g:i A', strtotime($submitted_at)) : 'Unknown'); ?></td>
        </tr>
        <tr>
            <th><label for="contact_ip">IP Address:</label></th>
            <td><?php echo esc_html($ip ?: 'Unknown'); ?></td>
        </tr>
        <tr>
            <th><label for="contact_status">Status:</label></th>
            <td>
                <select name="contact_status" id="contact_status">
                    <option value="new" <?php selected($status, 'new'); ?>>New</option>
                    <option value="contacted" <?php selected($status, 'contacted'); ?>>Contacted</option>
                    <option value="in_progress" <?php selected($status, 'in_progress'); ?>>In Progress</option>
                    <option value="completed" <?php selected($status, 'completed'); ?>>Completed</option>
                    <option value="archived" <?php selected($status, 'archived'); ?>>Archived</option>
                </select>
            </td>
        </tr>
    </table>
    <?php
}

function flowrush_save_contact_meta($post_id) {
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (!current_user_can('edit_post', $post_id)) return;
    
    if (isset($_POST['contact_status'])) {
        update_post_meta($post_id, 'contact_status', sanitize_text_field($_POST['contact_status']));
    }
}
add_action('save_post', 'flowrush_save_contact_meta');
