module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          components: './app/components',
          screens: './app/screens',
          navigations: './app/navigations',
          routes: './app/routes',
          constants: './app/constants',
          utils: './app/utils',
          theme: './app/theme',
          assets: './app/assets',
          services: './app/services',
          store: './app/store',
          enum: './app/enum',
          data: './app/data',
          i18n: './app/i18n',
          lang: './app/lang',
          hooks: './app/hooks',
          nativeModules: './app/nativeModules'
        },
      },
    ],
    ['react-native-reanimated/plugin'],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env'
      },
    ]
  ],
};

