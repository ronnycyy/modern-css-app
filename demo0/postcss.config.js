module.exports = {
  plugins: {
    // 支持 css-next
    'postcss-preset-env': {
      stages: 0,
      features: {
        /**
         * 启用嵌套规则，如
         * 
         * .test {
         *     & h1 {
         *       color: yellowgreen;
         *     }
         * }
         */
        'nesting-rules': true,
      },
    },
  },
};
