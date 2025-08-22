<?php
/**
 * iCreative Learning Theme Functions
 */

// Enqueue styles and scripts
function icreative_enqueue_assets() {
    // Enqueue the built CSS and JS from your React app
    wp_enqueue_style('icreative-style', get_template_directory_uri() . '/assets/index.css', array(), '1.0.0');
    wp_enqueue_script('icreative-script', get_template_directory_uri() . '/assets/index.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'icreative_enqueue_assets');

// Add theme support
function icreative_theme_support() {
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
}
add_action('after_setup_theme', 'icreative_theme_support');

// Register navigation menus
function icreative_register_menus() {
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'icreative'),
        'footer' => __('Footer Menu', 'icreative'),
    ));
}
add_action('init', 'icreative_register_menus');

// Add customizer settings for easy editing
function icreative_customize_register($wp_customize) {
    // Hero Section
    $wp_customize->add_section('icreative_hero', array(
        'title' => __('Hero Section', 'icreative'),
        'priority' => 30,
    ));
    
    $wp_customize->add_setting('hero_title', array(
        'default' => 'Empowering Elementary Students Through Creative, Fun, and Effective Learning Programs.',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('hero_title', array(
        'label' => __('Hero Title', 'icreative'),
        'section' => 'icreative_hero',
        'type' => 'textarea',
    ));
    
    $wp_customize->add_setting('hero_subtitle', array(
        'default' => 'Backed by Research, Theories of Learning, and Cognitive Psychology.',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('hero_subtitle', array(
        'label' => __('Hero Subtitle', 'icreative'),
        'section' => 'icreative_hero',
        'type' => 'textarea',
    ));
}
add_action('customize_register', 'icreative_customize_register');

// Custom post type for Programs
function icreative_create_programs_post_type() {
    $args = array(
        'public' => true,
        'label' => 'Programs',
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
        'menu_icon' => 'dashicons-academic-cap',
    );
    register_post_type('program', $args);
}
add_action('init', 'icreative_create_programs_post_type');

// Custom post type for Testimonials
function icreative_create_testimonials_post_type() {
    $args = array(
        'public' => true,
        'label' => 'Testimonials',
        'supports' => array('title', 'editor', 'custom-fields'),
        'menu_icon' => 'dashicons-testimonial',
    );
    register_post_type('testimonial', $args);
}
add_action('init', 'icreative_create_testimonials_post_type');
?>
