const PKG = require('../package.json')
const { resolve } = require('path')

module.exports = {
	name: 'signicons',
	version: PKG.version,
	sourceFiles: resolve(__dirname, '../raw'),
	metadataOutputDir: resolve(__dirname, '../metadata')
}