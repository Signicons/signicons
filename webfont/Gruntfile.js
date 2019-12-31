/*
	- Webfont Grunt setup:
	- https://github.com/sapegin/grunt-webfont
*/

module.exports = grunt => {
	grunt.initConfig({
		webfont: {
			icons: {
				src: '../svg/raw/*.svg',
				dest: 'dist/fonts',
				destCss: 'dist',
				options: {
					font: 'signicons-webfont',
					version: '1.0.0',
					template: 'templates/cssTemplate.css',
					templateOptions: {
						baseClass: 'signicons',
						classPrefix: 'sg--'
					},
					htmlDemo: true,
					htmlDemoTemplate: 'templates/htmlTemplate.html',
					htmlDemoFilename: 'demo',
					destHtml: 'demo',
					hashes: false,
					types: 'eot, woff2, woff, ttf, svg',
					relativeFontPath: 'fonts',
					ligatures: false,
					engine: 'fontforge',
					ie7: false,
					optimize: true
				}
			}
		}
	})
	grunt.loadNpmTasks('grunt-webfont')
	grunt.registerTask('default', ['webfont'])
}