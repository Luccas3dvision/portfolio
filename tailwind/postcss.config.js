const CSSNANO = require('cssnano')({preset: 'default'})

const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project
  content: [
      './src/index.html',
      './src/css/*.html',
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
      require('postcss-import'),
      purgecss,
      require('cssnano'),
      require('tailwindcss'),
      require('autoprefixer'),
      

  ],
}