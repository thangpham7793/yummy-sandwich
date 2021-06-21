module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./src'],
        alias: {
          components: './src/components',
          navigation: './src/navigation',
          features: './src/features',
        },
      },
    ],
  ],
}
