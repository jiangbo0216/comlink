## 搭建最小的webpack hot-reload 环境

### 执行命令

npm i -D webpack webpack-cli html-webpack-plugin webpack-dev-server

### 配置文件

webpack.config.js

```js
const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");

const webpack = require('webpack')

// Instantiate the plugin.
// The `template` property defines the source
// of a template file that this plugin will use.
// We will create it later.
const htmlPlugin = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, "./test/public/index.html"), // 替换路径 
  filename: 'index.html', // 替换文件名
  inject: true
});



module.exports = {
  mode: 'development',
  entry: {
    index: './test/index.js' // 替换入口文件
  },
  watch: true,
  output: {
    path: path.join(__dirname, 'test/dist'), // 替换输出文件目录
    filename: "bundle.js", // 替换文件名
    chunkFilename: '[name].js'
  },
  module: {
    
  },
  plugins: [
    htmlPlugin,
  ],
  resolve: {
    extensions: ['.json', '.ts', '.tsx', '.js']
  },
  devtool: 'source-map',
  devServer: {
    host: '127.0.0.1',
    port: 9000,
    hot: true
  }
};

```

### 编译comlink

npx rollup -c

## 安装依赖到本地

### Linking:

First, in the *cowabunga* folder (where package.json is):

```
npm link
```

Then in the project you want to include *cowabunga* in:

```
npm link cowabunga
```

### Unlinking:

*Before* switching branches and/or removing any node modules from the package itself (in my project, this includes running `learn clean` which removed the `node_modules` folders)

First, in the project:

```
npm unlink --no-save cowabunga
```

Second, in the package:

```
npm unlink
```

Note: order is important!



## 开始本地调试

npx webpack  serve