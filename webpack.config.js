const path = require( 'path' );

module.exports = {
  context: __dirname,
  entry: './src/service/index.js',
  output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  
  plugins: [],  // Array of plugins to apply to build chunk
  
  devServer: {  // configuration for webpack-dev-server
      contentBase: './src/index.html',  //source of static assets
      port: 7700, // port to run dev-server
  } 
};