module.exports = {
  stories: [
    // '../components/**/*.stories.mdx',
    // '../components/**/*.stories.@(js|jsx|ts|tsx)',
    '../.storybook/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-essentials', '@storybook/addon-react-native-web'],
  core: {
    builder: 'webpack5',
  },
  framework: '@storybook/react',
};
