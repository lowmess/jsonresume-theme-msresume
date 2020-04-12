const path = require('path')
const pug = require('pug')
const formatDate = require('date-fns/format')
const getContrast = require('get-contrast')

function render(resume) {
  const resumeHTML = pug.renderFile(
    path.resolve(__dirname, 'templates/index.pug'),
    { resume, formatDate, getContrast }
  )

  return resumeHTML
}

module.exports = {
  render,
}
