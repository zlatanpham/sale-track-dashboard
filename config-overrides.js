const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
let PurgecssPlugin = require('purgecss-webpack-plugin');
let glob = require('glob-all');

const {
  addWebpackResolve,
  addBabelPlugin,
  override,
  addPostcssPlugins,
} = require('customize-cra');
const path = require('path');

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

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
        new PurgecssPlugin({
          paths: glob.sync([path.join(__dirname, 'src/**/*.js')]),
          extractors: [
            {
              extractor: TailwindExtractor,
              extensions: ['html', 'js'],
            },
          ],
        }),
      ]);
    }
    return config;
  },
  config => rewireReactHotLoader(config),
);
