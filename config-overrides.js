const rewireReactHotLoader = require('react-app-rewire-hot-loader');

const {
  addWebpackResolve,
  addBabelPlugin,
  override,
  addPostcssPlugins,
} = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackResolve({ alias: { '@': path.resolve(__dirname, 'src') } }),
  addBabelPlugin('babel-plugin-styled-components'),
  addPostcssPlugins([require('tailwindcss')('./src/tailwind.js')]),
  config => rewireReactHotLoader(config),
);
