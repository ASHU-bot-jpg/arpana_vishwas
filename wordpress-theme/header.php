<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); ?></title>
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
