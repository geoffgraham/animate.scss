//'use strict';
module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'animate.css': 'animate.scss',
                }
            }
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1,
                sourceMap: true
            },
            target: {
                files: {
                    'animate.min.css': ['animate.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    
    grunt.registerTask('default', ['sass', 'cssmin']);
};
