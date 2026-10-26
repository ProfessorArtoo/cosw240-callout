<?php
/**
 * Plugin Name: COSW 240 Callout Block
 * Description: A simple callout block for learning Git.
 * Version: 1.0.0
 */

add_action( 'init', function () {
    register_block_type( __DIR__ );
} );