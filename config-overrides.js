const rewireReactHotLoader = require('react-app-rewire-hot-loader');

const { addWebpackResolve, override } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackResolve({ alias: { '@': path.resolve(__dirname, 'src') } }),
  config => rewireReactHotLoader(config),
);
