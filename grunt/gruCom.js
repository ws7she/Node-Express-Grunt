var grunt = require('grunt');
var maindata = require('./data/pack');
// var fs = require('fs');
process.on('message', function (m) {
    maindata.pack = m;
    grunt.cli({
        gruntfile: __dirname + '/Gruntfile.js'
    });

});
    // var h = fs.readFileSync("grunt/lib/all_one.js");
    // // 

    //  fs.readFileSync("grunt/lib/all_one.js", function() {
    //     process.send(h.toString());
    //  })


