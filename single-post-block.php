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

namespace nfntscrl\Blocks\Single_Post;

const PLUGIN_PATH = __DIR__;

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_blocks() {
	register_block_type_from_metadata(
		 __DIR__ . '/src/post', [
			'render_callback' => apply_filters( 'single_post_block_render_callback', 'nfntscrl\Blocks\Single_Post\display_post' ),
		]
	);
	register_block_type( __DIR__ . '/src/group' );
}
add_action( 'init', 'nfntscrl\Blocks\Single_Post\create_blocks' );

function array_to_html_attrs( $attrs ) {
	$html_list = [];
	foreach( $attrs as $key => $attr ) {
		$html_list[] = sprintf( '%s="%s"', sanitize_title( $key ), esc_attr( $attr ) );
	}

	return implode( ' ', $html_list );
}

function post_types_allowed() {
	return apply_filters( 'single_post_block_types_allowed', [ 'post'] );
}

function env_vars() {

	if ( ! get_current_screen()->is_block_editor() ) {
		return;
	}

	$env_vars = apply_filters( 'single_post_block_env_vars', [
		'post_types'            => implode( ',', post_types_allowed() ),
		'default_heading_level' => 3,
		'default_show_image'    => false,
	] );

	echo '<script type="application/javascript">';
	printf( 'var nfntscrlPostBlock = %s', json_encode( $env_vars ) );
	echo '</script>';

}
add_action( 'admin_footer', 'nfntscrl\Blocks\Single_Post\env_vars', 1 );

function display_post( $attributes ) {

	$template_locations = [
		get_stylesheet_directory() . '/template-parts',
		get_template_directory() . '/template-parts',
		__DIR__ . '/templates',
	];

	if ( empty( $attributes['postId'] ) || ! is_numeric( $attributes['postId'] ) ) {
		return '';
	}

	$the_post = get_post( $attributes['postId'] );
	if ( ! $the_post || is_wp_error( $the_post ) ) {
		return '';
	}

	ob_start();

	foreach( $template_locations as $path ) {
		if ( file_exists( $path . '/' . 'single-post-block-excerpt.php' ) ) {
			include( $path . '/' . 'single-post-block-excerpt.php' );
			break;
		}
	}

	$output = ob_get_clean();

	return $output;

}

function register_rest() {

	register_rest_route( 'nfntscrl/v1', 'single_post/(?P<id>\d+)', [
		'methods' => 'GET',
    	'callback' => 'nfntscrl\Blocks\Single_Post\get_any_post',
		'permission_callback' => '__return_true',
	] );

}
add_action( 'rest_api_init', 'nfntscrl\Blocks\Single_Post\register_rest' );

function get_any_post( $request ) {

	$id = $request->get_param( 'id' );
	if ( empty( $id ) ) {
		return new WP_Error( 'incomplete_request', 'Did not request a post ID.', [ 'code' => 403 ] );
	}

	if ( ! current_user_can( 'read_post', $id ) ) {
		return new WP_Error( 'unauthorized_request', 'Please request a publicly available post.', [ 'code' => 401 ] );
	}

	$post = get_post( $id );
	if ( ! $post || is_wp_error( $post ) ) {
		return new WP_Error( 'internal_error', 'There was an error retrieving this post.', [ 'code' => 500 ] );
	}

	return [
		'title' => get_the_title( $post ),
		'excerpt' => get_the_excerpt( $post ),
		'thumbnail' => get_the_post_thumbnail_url( $post, 'thumbnail' ),
	];

}