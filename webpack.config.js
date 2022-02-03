const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	context: path.resolve( process.cwd(), 'build' ),
	entry: {
		/*'post':  {
			import: path.resolve( process.cwd(), 'src/post/index.js' ),
			filename: './post/index.js'
		},
		'group':  {
			import: path.resolve( process.cwd(), 'src/group/index.js' ),
			filename: './group/index.js'
		}*/
		'post': path.resolve( process.cwd(), 'src/post/index.js' ),
		'group': path.resolve( process.cwd(), 'src/group/index.js' )
	},
	output: {
		...defaultConfig.output,
		filename: '[name].js'
	}
};