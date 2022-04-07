module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          src: './src',
          screens: './src/screens',
          assets: './src/assets',
          navigation: './src/navigation',
          components: './src/components',
          constants: './src/constants',
          helpers: './src/helpers',
          hooks: './src/hooks',
          navigators: './src/navigators',
          services: './src/services',
          stores: './src/stores',
          utils: './src/utils',
        },
      },
    ],
  ],
};
