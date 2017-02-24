# blog-app
一个简单的基于react + react-route + redux + node.js + es6的简易移动端博客应用，加深对这些知识的掌握。

## 项目运行
``` bash
# 安装依赖
cnpm install
（经测试，`cnpm` 对于 `node-sass` 等问题多的 Package 拥有秒杀能力）

# 开启本地服务器localhost:8888
npm run build
```


## 项目架构
### 目录结构
```
.
├─ src/               # 源码目录（开发都在这里进行）
│   ├─ actions/          # all redux action 
│   ├─ api/              # ajax请求统一管理
│   ├─ common/           # 公用组件
│   ├─ component/        # 页面组件
│   ├─ Layout/           # 全局布局
│   ├─ reducet/          # all redux reducer
│   ├─ routes/           # react 路由配置
│   ├─ store/            # store
│   ├─ utils/            # 工具
|   ├─ index.html        # 静态基页
|   ├─ index.js          # 入口文件
├── static/           # 放置无需经由 Webpack 处理的静态文件
│     ├─ build/          # webpack出口文件
│     ├─ images/         # 图片
│     ├─ javascript/     # js
│     ├─ stylesheet/     # css
├── .editorconfig     #  代码管理
├── .gitignore        # （配置）git 检查中需忽略的文件
├── server.js         #  服务器
├── webpack.config.js #  webpack配置
├── package.json      # （这个就不用多解释了吧）
```

## 作品展示
### * `首页`
![首页截图](https://github.com/ju1234/blog-app/blob/test/static/images/demo/index.jpg)

### * `登录`
![登录截图](https://github.com/ju1234/blog-app/blob/test/static/images/demo/login.jpg)

### *  `注册`
![注册截图](https://github.com/ju1234/blog-app/blob/test/static/images/demo/reg.jpg)

### *  `我的文章`
![我的文章截图](https://github.com/ju1234/blog-app/blob/test/static/images/demo/myArticle.jpg)
 
### *  `我的收藏`
![我的收藏截图](https://github.com/ju1234/blog-app/blob/test/static/images/demo/myFavoite.jpg)

### *  `个人资料`
![个人资料截图](https://github.com/ju1234/blog-app/blob/test/static/images/demo/personal.jpg)

### *  `搜索`
![搜索截图](https://github.com/ju1234/blog-app/blob/test/static/images/demo/search.jpg)

### *  `新建`
![新建截图](https://github.com/ju1234/blog-app/blob/test/static/images/demo/write.jpg)

