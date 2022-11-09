const { ModuleFederationPlugin } = require('webpack').container;

const webpackConfigPath = 'react-scripts/config/webpack.config';
const webpackConfig = require(webpackConfigPath);

const override = (config) => {
  // we add the ModuleFederationPlugin
  config.plugins.push(new ModuleFederationPlugin({
    name: 'test',
    filename: "remoteEntry.js",
    remotes: {
      Midnight: `Midnight@https://rd-latam.cognizantsoftvision.com/carnival/cwc/remoteEntry.js`,
    }
  }));

  // publicPath to be defined in order to use %PUBLIC_URL% in index.html
  config.output.publicPath = process.env.PUBLIC_URL + '/';
  
  // alternative is to use 'auto'
  // config.output.publicPath = 'auto';

  return config;
};

require.cache[require.resolve(webpackConfigPath)].exports = (env) => override(webpackConfig(env));

module.exports = require(webpackConfigPath);
