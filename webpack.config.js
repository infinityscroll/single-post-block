let defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	entry: {
		'post': {
			import: './src/post/index.js',
			filename: './post/[name][ext]'
		},
		'group': {
			import: './src/group/index.js',
			filename: './group/[name][ext]'
		}
	},
	output: {
		...defaultConfig.output,
		path: path.dirname( process.cwd(), 'dist' )
	}
};