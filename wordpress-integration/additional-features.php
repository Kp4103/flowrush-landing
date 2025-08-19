<?php
/**
 * Add this to your WordPress integration code for CSV export functionality
 */

// Add export button to Contact Inquiries list page
function flowrush_add_export_button() {
    $screen = get_current_screen();
    if ($screen && $screen->post_type === 'contact_inquiry') {
        ?>
        <script type="text/javascript">
        jQuery(document).ready(function($) {
            $('.tablenav.top .alignleft.actions').first().append(
                '<a href="<?php echo admin_url('admin.php?action=flowrush_export_contacts'); ?>" class="button">Export to CSV</a>'
            );
        });
        </script>
        <?php
    }
}
add_action('admin_footer', 'flowrush_add_export_button');

// Handle CSV export
function flowrush_export_contacts_csv() {
    if (!current_user_can('manage_options')) {
        wp_die('Unauthorized');
    }
    
    $contacts = get_posts(array(
        'post_type' => 'contact_inquiry',
        'posts_per_page' => -1,
        'post_status' => 'private'
    ));
    
    if (empty($contacts)) {
        wp_die('No contacts found to export.');
    }
    
    // Set headers for CSV download
    header('Content-Type: text/csv');
    header('Content-Disposition: attachment; filename="flowrush-contacts-' . date('Y-m-d') . '.csv"');
    
    $output = fopen('php://output', 'w');
    
    // CSV headers
    fputcsv($output, array(
        'Name',
        'Email', 
        'Company',
        'City',
        'Country',
        'WhatsApp',
        'Message',
        'Status',
        'Submitted Date',
        'IP Address'
    ));
    
    // Export each contact
    foreach ($contacts as $contact) {
        $row = array(
            get_post_meta($contact->ID, 'contact_name', true),
            get_post_meta($contact->ID, 'contact_email', true),
            get_post_meta($contact->ID, 'contact_company', true),
            get_post_meta($contact->ID, 'contact_city', true),
            get_post_meta($contact->ID, 'contact_country', true),
            get_post_meta($contact->ID, 'contact_whatsapp', true),
            strip_tags($contact->post_content),
            get_post_meta($contact->ID, 'contact_status', true),
            get_post_meta($contact->ID, 'contact_submitted_at', true),
            get_post_meta($contact->ID, 'contact_ip', true)
        );
        fputcsv($output, $row);
    }
    
    fclose($output);
    exit;
}
add_action('admin_action_flowrush_export_contacts', 'flowrush_export_contacts_csv');

// Add dashboard widget showing recent contacts
function flowrush_dashboard_widget() {
    wp_add_dashboard_widget(
        'flowrush_recent_contacts',
        'Recent Contact Inquiries',
        'flowrush_dashboard_widget_content'
    );
}
add_action('wp_dashboard_setup', 'flowrush_dashboard_widget');

function flowrush_dashboard_widget_content() {
    $recent_contacts = get_posts(array(
        'post_type' => 'contact_inquiry',
        'posts_per_page' => 5,
        'post_status' => 'private'
    ));
    
    if (empty($recent_contacts)) {
        echo '<p>No recent contact inquiries.</p>';
        return;
    }
    
    echo '<ul>';
    foreach ($recent_contacts as $contact) {
        $name = get_post_meta($contact->ID, 'contact_name', true);
        $email = get_post_meta($contact->ID, 'contact_email', true);
        $submitted = get_post_meta($contact->ID, 'contact_submitted_at', true);
        
        echo '<li>';
        echo '<strong>' . esc_html($name) . '</strong> (' . esc_html($email) . ')<br>';
        echo '<small>' . esc_html($submitted ? date('M j, Y g:i A', strtotime($submitted)) : 'Unknown date') . '</small>';
        echo ' - <a href="' . admin_url('post.php?post=' . $contact->ID . '&action=edit') . '">View</a>';
        echo '</li>';
    }
    echo '</ul>';
    
    echo '<p><a href="' . admin_url('edit.php?post_type=contact_inquiry') . '" class="button">View All Inquiries</a></p>';
}
?>
