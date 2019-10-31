const path = require('path');

module.exports = {
  webpack: {
    rootPath: __dirname,
    entryPath: [path.join(__dirname, './src/index.tsx')],
    htmlPlugin:{
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.ejs'),
      favicon: path.join(__dirname, '/favicon.ico'),
    },
    alias: {
      src: path.join(__dirname, 'src'),
    },
    definePlugin: {
      Debug: false
    },
    analyzePlugin: false,
    devServer: {
      port: 4000,
    }
  }
}