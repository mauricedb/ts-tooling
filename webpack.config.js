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
    rules: [{ test: /\.ts$/, loader: 'ts-loader' }],
  },
};
