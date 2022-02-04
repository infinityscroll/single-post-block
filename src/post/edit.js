import { __ } from '@wordpress/i18n';

import { __experimentalLinkControl as LinkControl, useBlockProps } from '@wordpress/block-editor';

import { Spinner } from '@wordpress/components';

import { useState, RawHTML } from '@wordpress/element';

import apiFetch from '@wordpress/api-fetch';

import './editor.scss';


const PostPreview = ( props ) => {

	const { postId, headingLevel } = props;

	const [ thePost, setPostState ] = useState( null );
	const [ isLoading, setLoadingState ] = useState( false );

	let postClass = 'single-post-block__post-body';

	if ( ! thePost && ! isLoading ) {
		setLoadingState( 'loading' );
		apiFetch( { 
			path: '/wp/v2/posts/' + postId,
		} )
		.then( ( response ) => {
			setPostState( { 
				title: response.title.rendered, 
				excerpt: RawHTML( { children: response.content.rendered, className: 'single-post-block__post-excerpt-wrapper' } )
			} );
			postClass = 'single-post-block__post-body single-post-block__post-body--ok-state';
			setLoadingState( 'done' );
		} )
		.catch( ( e ) => {
			setPostState( { title: 'Error retrieving post', excerpt: e.message || 'An error occurred.' } );
			postClass = 'single-post-block__post-body single-post-block__post-body--error-state';
			setLoadingState( 'error' );
		} );
	};

	return (
		<div className="single-post-block__post-preview">
			{ thePost && (
				<div className="{ postClass }">
					<h2>{ thePost.title }</h2>
					<div className="single-post-block__post-excerpt">{ thePost.excerpt }</div>
				</div>
			) || (
				<div className="single-post-block__loading-placeholder">
					<Spinner />
				</div>
			) }
		</div>
	);
}

const PostSelector = ( props ) => {
	
	const { onChange } = props;

	return (
		<div className="single-post-block__post-selector">
			<label>Select a post to display:</label>
			<LinkControl
				suggestionsQuery={ {
					type: 'post',
					subtype: 'post',
				} }
				onChange={ ( value ) => {
					onChange && onChange( value.id );
				} }
				noDirectEntry={ true }
				settings={ [] }
			/>
		</div>
	);
};


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
	const {
		attributes: { postId, headingLevel },
		setAttributes,
		className
	} = props;

	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			{ postId && (
				<PostPreview postId={postId} headingLevel={headingLevel} />
			) || (
				<PostSelector onChange={ ( postId ) => {
					postId = parseInt( postId );
					setAttributes( { postId } );
				} } />
			) }			
		</div>
	);
}
