const withCSS = require('@zeit/next-css');

module.exports = withCSS({
    webpack: (config, { dev }) => {
        config.devtool = 'source-map'
  
        for (const plugin of config.plugins) {
          if (plugin['constructor']['name'] === 'UglifyJsPlugin') {
            plugin.options.sourceMap = true
            break
          }
        }
  
        return config
      }
});
