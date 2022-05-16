module.exports = {
  module: {
    rules: [
      // 给 css 加上 *.d.ts  活～
      {
        enforce: 'pre',
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'typed-css-modules-loader',
      },
      {
        test: /\.css$/i,
        use: [
          // 打包📦到  <style>...</style>
          'style-loader',
          // 处理传统 css 代码
          {
            loader: 'css-loader',
            options: {
              modules: true,   // CSS Module
            },
          },
          // 编译 css-next 语法
          'postcss-loader',
        ],
      },
    ],
  },
};
