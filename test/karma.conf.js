//Karma configuration

module.exports = function(config) {
    config.set({
        //base path that will be usd to resolve all patternss (e.g., files, exclude)
        basePath: '../',
        
        //frameworks to use
        //available frameorks: http://mpnjs.org.browse/keyword/karma-adapter
        frameworks: ['jasmine'],
        
        //list of files / patterns to load in the browser
        files : [
          'bower_components/angular/angular.js',
          'bower_components/angular-resource/angular-resource.js',
          'bower_components/angular-ui-router/release/angular-ui-router.js',
          //'bower_components/angular-mocks/angular-mocks.js',
          'node_modules/angular-mocks/angular-mocks.js',
          'app/scripts/*.js',
          'test/unit/**/*.js'
        ],
        //list of files to exlude
        exclude : [
            'test/protractor.conf.js', '"test/e2e/*.js'
        ],

        //preprocess matching files before serving them to the browser
        //available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        },

        //test results reporter to use
        //possible values: 'dots', 'progress'
        //available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

        //web server port
        port: 9876,

        //enable / disable colors in the output (reporters and logs)
        colors: true,

        //level of logging
        //possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        //enable /disable watching file and executing tests wheever any file changes
        autoWatch: true,

        //start these browsers
        //available browser launchers: http://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome', 'PhantomJS', 'PhantomJS_custom'],

        //you can define custom flags
        customLaunchers: {
            'PhantomJS_custom': {
                base: 'PhantomJS',
                options: {
                    windowName: 'my-window',
                        settings: {
                            webSecurityEnabled: false
                        },
                },
                flags: ['--load-images=true'],
                debug: true
            }
        },

        phantomjsLauncher: {
            //have phantomjs exit if a ResourceEror is encountered (useful if karma exits without killing phantom)
            exitOnResourceError: true
        },

        //Continuous Integration mode
        //if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        //Concurrency level
        //how many browsers should be started simultaneous
        concurrency: Infinity
    })
}


    