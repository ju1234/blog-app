/**
 * 文件说明： webpack
 * 详细描述：
 * 创建者： JU
 * 时间： 2016/12/19.
 */
console.log('process.env.NODE_ENV',process.env.NODE_ENV);
module.exports = {
  devtool: process.env.NODE_ENV ? '': 'source-map',
  entry: __dirname + "/src/index.js",
  // entry:  __dirname + "/src/test/index.js",
  output: {
    path: __dirname + "/static/build",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {//在配置文件里添加JSON loader
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
        query: {
          presets: ['babel-preset-es2015', 'babel-preset-react', 'babel-preset-stage-0']
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
        query: {
          presets: ['babel-preset-es2015', 'babel-preset-react', 'babel-preset-stage-0']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules'//添加对样式表的处理
      },
      {
        test: /.(png)|(jpg)$/,
        loader: 'url-loader?limit=50000'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?modules!sass-loader'
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
