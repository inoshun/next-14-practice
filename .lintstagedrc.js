const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`

const prettierCommand = 'prettier --write'

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, prettierCommand],
  '*.{html,json,css}': prettierCommand,
}
