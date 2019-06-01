const path = require('path');

module.exports = {
  entry: './src/client/index.ts',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/dist'),
    publicPath: '/dist/',   // devServer不产生物理文件，这个选项让他可以被html文件指代
  },

  module: {
    rules: [
      {
        test: /\.ts|.tsx$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },

  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000,
    open:true,
  },

}