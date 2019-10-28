const path = require('path');

module.exports = {
  "baseUrl": __dirname,
  "entry": [path.join(__dirname, './src/index.tsx')],
  html:{
    filename: 'index.html',
    template: path.join(__dirname, 'src/index.ejs'),
  },
  alias: {
    src: path.join(__dirname, 'src'),
  },
  globalVariable: {
    Debug: false
  },
  analyze: false,
  port: 5000,
}