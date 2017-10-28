const path = require('path')
const rootPath = path.resolve(__dirname, './')
const pkg = require('./package.json')

module.exports = {
  rootPath,
  title: `${pkg.name} : ${pkg.description} (${pkg.version})`,
  // favicon: path.resolve(rootPath, 'logo.png'),
  library: {
    name: pkg.name,
    // version: pkg.version,
    // repository: pkg.repository.url,
    // author: pkg.author,
    // packages: 'packages',
    // scope: '@instructure'
  },
  files: [
    path.resolve(rootPath, 'node_modules/@instructure/ui-core/src/components/*/index.js'),
  ],
  ignore: [
    path.resolve(rootPath, '**/node_modules/**'),
    path.resolve(rootPath, '**/__tests__/**'),
    path.resolve(rootPath, '**/config/**')
  ],
  identifier: (resourcePath, matter, context) => {
    if (matter.data.id) {
      return matter.data.id
    } else if (resourcePath.includes('/index.js') || resourcePath.includes('README.md')) {
      return '[folder]'
    } else {
      return '[name]'
    }
  }
}
