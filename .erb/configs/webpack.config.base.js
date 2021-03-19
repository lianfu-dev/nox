/**
 * Base webpack config used across other specific configs
 */

import path from 'path';
import webpack from 'webpack';

import paths from './paths';
import { dependencies as externals } from '../../src/package.json';

export default {
  externals: [...Object.keys(externals || {})],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  output: {
    path: path.join(__dirname, '../../src'),
    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'commonjs2',
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [path.join(__dirname, '../src'), 'node_modules'],
    alias: {
      '@': paths.appSrc,
      '@common': paths.appCommon,
      '@commonComp': paths.commonComp,
      '@commonStore': paths.commonStore,
      '@commonScss': paths.commonScss,
      '@commonStyled': paths.commonStyled,
      '@comp': paths.appComp,
      '@con': paths.appCon,
      '@store': paths.appStore,
      '@scss': paths.appScss,
      '@styled': paths.appStyled,
      '@util': paths.appUtil,
      '@tool': paths.appTool,
      '@theme': paths.appTheme,
      '@assets': paths.appAssets,
      '@image': paths.appImage,
      '@doc': paths.appDoc,
    },
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
  ],
};
