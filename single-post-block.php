<?php
/**
 * Plugin Name:       Single Post Block
 * Description:       Display one post of your choosing, or multiple.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Paul H. <paul@infinityscroll.blog>
 * License:           GPL-3.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       single-post-block
 *
 * @package           create-block
 */

namespace InfinityScroll\Blocks\Single_Post;

const PLUGIN_PATH = __DIR__;

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_blocks() {
	register_block_type( __DIR__ . '/src/post' );
	register_block_type( __DIR__ . '/src/group' );
}
add_action( 'init', 'InfinityScroll\Blocks\Single_Post\create_blocks' );
