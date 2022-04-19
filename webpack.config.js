module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    filename: 'pizzeria-bundle.js',
  },
  resolve: {
    extensions: ['.ts', '...'],
  },
  module: {
    rules: [
      // { test: /\.ts$/, loader: 'ts-loader' }
      // { test: /\.ts$/, loader: 'babel-loader' },
      {
        test: /\.ts$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'ts',
          target: 'es2016',
        },
      },
    ],
  },
};
