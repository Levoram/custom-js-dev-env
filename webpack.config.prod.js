import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  mode: "production",
  resolve: {
    extensions: ["*", ".js", ".jsx", ".json"],
  },
  devtool: "source-map",
  entry: {
    vendor: path.resolve("src/vendor"),
    main: path.resolve("src/index"),
  },
  target: "web",
  output: {
    path: path.resolve("dist"),
    publicPath: "/",
    filename: "[name].[chunkhash].js",
    assetModuleFilename: "[path][name].[ext][query]",
  },
  // Webpack 4 removed the commonsChunkPlugin. Use optimization.splitChunks instead.
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      noInfo: true, // set to false to see a list of every file being bundled.
    }),

    // Generate an external css file with a hash in the filename
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),

    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: "src/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
      // Properties you define here are available in index.html
      // using htmlWebpackPlugin.options.varName
      trackJSToken: "INSERT YOUR TOKEN HERE",
    }),
    // Minification of JS
    // Code is automatically minified in prod mode as of Webpack 4 so no need to handle it ourself
  ],
  module: {
    rules: [
      {
        test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3|ico)$/,
        type: "asset/resource",
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
    ],
  },
};
