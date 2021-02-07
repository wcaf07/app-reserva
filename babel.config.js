module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
          '@atom': './src/components/atom',
          '@molecules': './src/components/molecules',
          '@tokens': './src/components/tokens',
          '@images': './src/assets/images',
          '@infrastructure': './src/infrastructure',
        },
      },
    ],
  ],
};
