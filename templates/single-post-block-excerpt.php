<?php

namespace nfntscrl\Blocks\Single_Post;

// global: $the_post, $attributes

$attributes = apply_filters( 'single_post_block_attributes', $attributes );

$tag_name = $attributes['displayOptions']['tag'] ?? 'blockquote';
$heading_level = 'h' . absint( $attributes['displayOptions']['headingLevel'] ?? '3' );

$tag_attrs = [
	'cite' => get_permalink( $the_post ),
	'class' => 'single-post-block',
];
$tag_attrs = apply_filters( 'single_post_block_tag_attributes', $tag_attrs );

?>
<<?php echo esc_html( $tag_name ) ?> <?php echo array_to_html_attrs( $tag_attrs ) ?>>

	<?php do_action( 'single_post_block_start', $the_post ); ?>

	<?php if ( has_post_thumbnail( $the_post ) && ( $attributes['displayOptions']['showImage'] ?? false ) ) : ?>
	<?php echo get_the_post_thumbnail( $the_post, apply_filters( 'single_post_block_image_size', 'thumbnail', $the_post ) ); ?>
	<?php endif; ?>

	<<?php echo $heading_level; ?>><a href="<?php echo esc_url( $tag_attrs['cite'] ) ?>"><?php echo get_the_title( $the_post ); ?></a></<?php echo $heading_level; ?>>

	<?php echo get_the_excerpt( $the_post ); ?>

	<?php do_action( 'single_post_block_end', $the_post ); ?>

</<?php echo esc_html( $tag_name ) ?>>