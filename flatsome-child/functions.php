<?php
$website_version = 1 + rand();

function load_javascript(): void
{
    global $website_version;

    wp_register_script('register_template_functions', get_stylesheet_directory_uri() . '/compiled/scripts.js', 'jquery', $website_version, array(
        'in_footer' => false,
    ));
    wp_enqueue_script('register_template_functions');
}

add_action('wp_enqueue_scripts', 'load_javascript', 20);

function load_stylesheet(): void
{
    global $website_version;

    wp_register_style('compiled_stylesheet', get_stylesheet_directory_uri() . '/compiled/assets.css', array(), $website_version);
    wp_enqueue_style('compiled_stylesheet');
}

add_action('wp_enqueue_scripts', 'load_stylesheet');
