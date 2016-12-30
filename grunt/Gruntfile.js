var grunt = require('grunt');
var pkg = grunt.file.readJSON("package.json");
var packs = require('./data/pack');
module.exports = function (grunt) {
    var eggconf = {
        "files": {
            "public/javascripts/grunt/all_one.js": packs.pack
        }
    }
    grunt.initConfig({
        pkg: pkg,
        uglify: {
            options: {report: "min"},
            zylib: eggconf,
        }
    });
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-datauri');
    grunt.loadNpmTasks('grunt-fontoptim');
    grunt.registerTask("default", ["uglify"]);
};

