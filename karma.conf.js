module.exports = function(config) {
  config.set({
    basePath: '', // Set the base path to the root of your project

    frameworks: ['jasmine'],

    files: [
      'tests/**/*.spec.ts',
    ],

    exclude: [
    ],

    preprocessors: {
      'src/**/*.spec.ts': ['webpack'], // Use webpack as the preprocessor for TypeScript files
    },

    webpack: {
      module: {
        rules: [
          {
            test: /\.ts$/,
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      resolve: {
        extensions: ['.ts', '.js'],
      },
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,

    concurrency: Infinity
  });
};
