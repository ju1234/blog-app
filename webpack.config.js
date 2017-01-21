/**
 * Created by qichao on 2016/12/19.
 */
module.exports = {
  devtool: 'source-map',
  entry:  __dirname + "/src/index.js",
  // entry:  __dirname + "/src/test/index.js",
  output: {
    path: __dirname + "/static/build",
    filename: "bundle.js"
  },
  resolve:{
        extensions: ['', '.js', '.jsx']
  },
  module: {//在配置文件里添加JSON loader
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',//在webpack的module部分的loaders里进行配置即可
        query: {
          presets: ['es2015','react','stage-0']
        }
      },
      { test: /\.jsx$/,
          exclude: /node_modules/,
          loader: 'babel',//在webpack的module部分的loaders里进行配置即可
          query: {
              presets: ['es2015','react','stage-0']
          }
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules'//添加对样式表的处理
      },
      {
        test:/.(png)|(jpg)$/,
        loader: 'url?limit=50000'
       },
        {
            test: /\.scss$/,
            loader: 'style!css?modules!sass-loader'
        },
]
  },
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },



};
