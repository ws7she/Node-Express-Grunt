var grunt = require('grunt');
var maindata = require('./data/pack');
process.on('message', function (m) {
    maindata.pack = m;
    grunt.cli({
        gruntfile: __dirname + '/Gruntfile.js'
    });

});
