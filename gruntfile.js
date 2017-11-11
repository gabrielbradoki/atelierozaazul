module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/image',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'assets/image'
                }]
            }
        },

        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: '**/*.js',
                    dest: 'assets/js'
                }]
            }
        },

        less: {
            development: {
                files: {
                    'src/css/all.css': ['src/**/*.less'],
                    'assets/css/all.css': ['src/**/*.less'],
                }
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'assets/css',
                    ext: '.min.css'
                }]
            }
        },

        watch: {
            styles: {
                tasks: ['imagemin', 'uglify', 'less', 'cssmin'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('jit-grunt');

    grunt.registerTask('default', ['watch']);

};