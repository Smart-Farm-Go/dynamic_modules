const { defineConfig } = require('@vue/cli-service');
const { resolve } = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'example/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  devServer: {
    port: 8080,
    open: true,
  }
});
