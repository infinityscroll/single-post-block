let defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	context: path.resolve( process.cwd(), 'src' ),
	entry: {
		'post':  './post/index.js',
		'group': './group/index.js'
	},
	output: {
		...defaultConfig.output,
		path: path.resolve( process.cwd(), 'dist' ),
	}
};