const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

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
  (config, env) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins = (config.plugins || []).concat([
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
          generateStatsFile: true,
          statsFilename: 'stats.json',
        }),
      ]);
    }
    return config;
  },
  config => rewireReactHotLoader(config),
);
