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
          // <style></style> 或者 <link ref="stylesheets" src="...." />
          'style-loader',
          // 处理 css 代码
          {
            loader: 'css-loader',
            options: {
              // CSS Module
              modules: true,
            },
          },
          // 支持 css-next
          'postcss-loader',
        ],
      },
    ],
  },
};
