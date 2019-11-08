const path = require('path');

module.exports = {
  webpack: {
    rootPath: __dirname,
    entryPath: [path.join(__dirname, './src/index.tsx')],
    pxtorem: {
      rootValue: 100,
      propList: [
        '*',
        '!min-width',
        '!border',
        '!border-left',
        '!border-right',
        '!border-top',
        '!border-bottom',
      ],
      selectorBlackList: [
        'no_rem'
      ],
    },
    libs: {
      vender: ['react', 'react-dom'],
    },
    htmlPlugin:{
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.ejs'),
      favicon: path.join(__dirname, '/favicon.ico'),
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