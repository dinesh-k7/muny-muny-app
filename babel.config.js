module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@muny-components': './src/components/',
          '@muny-screens': './src/screens',
          '@muny-navigation': './src/navigation',
          '@muny-styles': './src/styles',
          '@muny-assets': './src/assets',
        },
      },
    ],
  ],
};
