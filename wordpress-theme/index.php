<?php
/**
 * The main template file for iCreative Learning theme
 */

get_header(); ?>

<main>
    <?php
    // Get page content from WordPress
    if (have_posts()) :
        while (have_posts()) : the_post();
            the_content();
        endwhile;
    else :
        // Default homepage content
        get_template_part('template-parts/homepage');
    endif;
    ?>
</main>

<?php get_footer(); ?>
