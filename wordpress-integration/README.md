# Flowrush WordPress Integration Setup

This guide explains how to integrate the Next.js landing page with WordPress for form submissions.

## Architecture Overview

- **Next.js Frontend** (Deployed on Vercel) → Handles UI and user interactions
- **WordPress Backend** (Hosted on your server) → Processes and stores form submissions
- **Communication** → REST API calls from Next.js to WordPress

## Setup Instructions

### 1. WordPress Setup (Server Side)

#### Option A: Add to Functions.php
1. Open your active theme's `functions.php` file
2. Copy the entire code from `flowrush-contact-integration.php`
3. Paste it at the end of your `functions.php` file

#### Option B: Create Custom Plugin (Recommended)
1. Create a new folder: `/wp-content/plugins/flowrush-contact-integration/`
2. Copy `flowrush-contact-integration.php` to this folder
3. Add this header at the top of the file:
```php
<?php
/**
 * Plugin Name: Flowrush Contact Integration
 * Description: Handles contact form submissions from Next.js frontend
 * Version: 1.0
 * Author: Your Name
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Rest of the code goes here...
```
4. Activate the plugin from WordPress admin

### 2. Configure CORS Settings

In the PHP code, update the allowed origins array with your actual URLs:

```php
$allowed_origins = array(
    'https://your-actual-vercel-app.vercel.app', // Replace with your Vercel URL
    'http://localhost:3000', // Keep for development
    'https://flowrush.vercel.app' // Replace with your custom domain
);
```

### 3. Next.js Setup (Vercel Side)

#### Update Environment Variables
1. Open `.env.local` in your Next.js project
2. Update the WordPress URL:
```
NEXT_PUBLIC_WORDPRESS_URL=https://your-wordpress-site.com
```

#### Vercel Environment Variables
In your Vercel dashboard:
1. Go to your project settings
2. Add Environment Variable:
   - Name: `NEXT_PUBLIC_WORDPRESS_URL`
   - Value: `https://your-wordpress-site.com`

### 4. Testing the Integration

#### Test Endpoints
1. **Check WordPress endpoint**:
   ```
   https://your-wordpress-site.com/wp-json/flowrush/v1/contact
   ```
   Should return: `{"code":"rest_no_route","message":"No route was found matching the URL and request method","data":{"status":404}}`

2. **Test form submission** from your Next.js site

#### Debug Common Issues
1. **CORS Errors**: Check allowed origins in PHP code
2. **404 Errors**: Verify WordPress permalinks are set to "Post name"
3. **500 Errors**: Check WordPress error logs
4. **Form not submitting**: Check browser console for errors

### 5. WordPress Admin Features

After setup, you'll have access to:

#### Contact Inquiries Menu
- View all form submissions
- See contact details, status, location
- Manage inquiry status (New, Contacted, In Progress, Completed)

#### Automatic Features
- **Email notifications** to admin on new submissions
- **Auto-reply emails** to users
- **Contact details storage** with IP tracking
- **Status management** for lead follow-up

### 6. Customization Options

#### Email Templates
Modify the email content in the PHP code:
```php
$email_message = sprintf(
    "Custom email template here...",
    $full_name,
    $email,
    // ... other variables
);
```

#### Add Custom Fields
To add new form fields:
1. Update the Next.js form component
2. Add sanitization in PHP code
3. Add meta field storage
4. Update admin display columns

#### Integration with CRM/Marketing Tools
The contact data is stored in WordPress, making it easy to integrate with:
- **CRM Systems** (HubSpot, Salesforce)
- **Email Marketing** (Mailchimp, ConvertKit)
- **Zapier** for automation

## File Structure

```
your-project/
├── .env.local                          # Environment variables
├── components/
│   └── GlobalConnectivity.tsx          # Updated form component
└── wordpress-integration/
    ├── README.md                        # This file
    └── flowrush-contact-integration.php # WordPress integration code
```

## Security Features

- ✅ **CORS Protection** - Only allows requests from specified domains
- ✅ **Input Sanitization** - All user input is properly sanitized
- ✅ **Email Validation** - Server-side email format validation
- ✅ **Private Post Type** - Contact inquiries are private by default
- ✅ **IP Tracking** - Records IP address for security monitoring

## Support

If you encounter any issues:

1. **Check WordPress error logs** in cPanel or hosting dashboard
2. **Enable WordPress debug mode** in `wp-config.php`:
   ```php
   define('WP_DEBUG', true);
   define('WP_DEBUG_LOG', true);
   ```
3. **Test with browser developer tools** to check network requests
4. **Verify environment variables** are properly set in Vercel

## Next Steps

After successful integration:

1. **Test thoroughly** on staging environment
2. **Set up monitoring** for form submissions
3. **Configure email notifications** for your team
4. **Consider adding** lead scoring or CRM integration
5. **Monitor performance** and optimize as needed

---

**Note**: Replace all placeholder URLs (`your-wordpress-site.com`, `your-vercel-app.vercel.app`) with your actual domain names before deployment.
