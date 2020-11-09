const custom = require('../webpack.config')

module.exports = {
  stories: ['../src/components/**/*.stories.[tj]s', '../src/containers/**/*.stories.[tj]s', '../src/components/**/**/*.stories.[tj]s'],
  addons: [
    '@storybook/addon-viewport',
    'storybook-mobile'
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: { alias: { ...config.resolve.alias, ...custom.resolve.alias } },
      module: { ...config.module, rules: custom.module.rules },
    }
  },
}
