<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); ?></title>

    <!-- Favicon and App Icons -->
    <link rel="icon" type="image/x-icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico" />
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/favicon.ico" />
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/favicon.ico" />
    <link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico" />
    <meta name="theme-color" content="#8B5CF6" />
    <link rel="manifest" href="<?php echo get_template_directory_uri(); ?>/site.webmanifest" />

    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    
    <!-- Your React app will mount here -->
    <div id="root">
        <!-- Fallback content for when JavaScript is disabled -->
        <noscript>
            <div style="text-align: center; padding: 50px;">
                <h1>JavaScript Required</h1>
                <p>This website requires JavaScript to function properly. Please enable JavaScript in your browser.</p>
            </div>
        </noscript>
    </div>
