const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.html',
    './public/**/*.html',
    './public/*.html',
    './src/**/*.vue',
    './public/**/*.vue',
  ],

  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});


module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // purgecss,
  ],
};
