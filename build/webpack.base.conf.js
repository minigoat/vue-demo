const path = require('path');
const config = require('../config');
const vueLoaderConfig = require('./vue-loader.conf');
const webpack = require('webpack');
// 依赖的PhantomJS包安装的时候，要连接外网下载，只能先去掉
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry: {
    app: ['./src/main.js'],
    // info 存在加载顺序的问题，只能单独抽出来
    vendor: [
      "vue",
      "vue-router",
      "vuex",
      "@/static/js/common",
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.less'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      comp: resolve('src/components'),
      containers: resolve('src/containers'),
      const: resolve('src/constants'),
      ser: resolve('src/services'),
      static: resolve('src/static'),
    }
  },
  module: {
    rules: [
      // 暂时先禁用eslint
      // {
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   include: [resolve('src')],
      //   options: {
      //     formatter: require('eslint-friendly-formatter')
      //   }
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('mock')],
        options: {
          cacheDirectory: true,
        }
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.svg$/,
        use: [
          'svg-sprite-loader',
          'svgo-loader'
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:8].[ext]'
        }
      },
    ]
  },
  plugins: [
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      // (with more entries, this ensures that no other module
      //  goes into the vendor chunk)
      minChunks: Infinity
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    new webpack.DefinePlugin({
      /* API模块 */
      _WEBPACK_API_MODULES: JSON.stringify(config.apiModules),
      /* API域名 */
      _WEBPACK_API_DOMAIN: JSON.stringify(config.apiDomain),
      /* 编译模式（接口类型） */
      _WEBPACK_BUILD_MODE: JSON.stringify(config.buildMode),
      /* public path */
      _WEBPACK_PUBLIC_PATH: JSON.stringify(config.publicPath),
    }),
    new webpack.ProvidePlugin({
      Promise: 'imports-loader?this=>global!exports-loader?global.Promise!es6-promise/auto',
      fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    }),
    // new FaviconsWebpackPlugin({
    //   logo: resolve('src/static/img/logo.png'),
    //   persistentCache: true,
    //   inject: true,
    //   icons: {
    //     android: false,
    //     appleIcon: false,
    //     appleStartup: false,
    //     coast: false,
    //     favicons: true,
    //     firefox: false,
    //     opengraph: false,
    //     twitter: false,
    //     yandex: false,
    //     windows: false,
    //   }
    // })
  ]
};
