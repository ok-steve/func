const terser = require('@rollup/plugin-terser');

module.exports = {
  input: 'src/index.js',
  plugins: [terser()],
  output: {
    format: 'iife',
    file: 'dist/func.js',
    sourcemap: true,
  },
};
