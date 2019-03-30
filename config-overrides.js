const rewireReactHotLoader = require('react-app-rewire-hot-loader');

const {
  addWebpackResolve,
  addBabelPlugin,
  override,
} = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackResolve({ alias: { '@': path.resolve(__dirname, 'src') } }),
  addBabelPlugin('babel-plugin-styled-components'),
  config => rewireReactHotLoader(config),
);
