const fs = require('fs')
const junk = require('junk')

function getIconFileNames(src) {
	let files = fs.readdirSync(src, 'utf8').filter(junk.not)
	let list = []
	files.map(f => {
		let filenameWithoutExtension = f.slice(0, -4)
		list.push(filenameWithoutExtension)
	})
	return list
}

function createMetadataFile(config, list) {
	return `{
	"${config.name}": {
		"metadata": {
			"releaseVersion": "${config.version}",
			"glyphsCount": "${list.length}"
		},
		"icons": ${JSON.stringify(list, null)}
	}
}`}

module.exports = function generateJsonFile(config) {
	console.log('\nGenerating JSON file...')
	let iconList = getIconFileNames(config.sourceFiles)
	if (!fs.existsSync(config.metadataOutputDir)) {
		fs.mkdirSync(config.metadataOutputDir)
	}
	return fs.writeFile(`${config.metadataOutputDir}/${config.name}.json`, createMetadataFile(config, iconList), 'utf8', err => {
			if (err) { throw err }
			console.log('Done!\n')
		}
	)
}