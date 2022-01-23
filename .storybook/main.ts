const { getStoriesPaths } = require('slice-machine-ui/helpers/storybook')

module.exports = {
  stories: [...getStoriesPaths(), '../styles/globals.css'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  core: {
    builder: 'webpack5'
  }
}
