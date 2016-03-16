module.exports = function (grunt) {
    // Project configuration. 
    grunt.initConfig({
        concat: {
            js: {
                src: ['javascript/jquery-2.2.1.min.js', 'javascript/my_scripts.js'],
                dest: 'dist/built.js',
            },
            css: {
                src: ['css/main_body.css', 'css/nav.css', 'css/side_panel.css'],
                dest: 'dist/main_styles.css',
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/built.min.js': ['dist/built.js']
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist',
                    ext: '.min.css'
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
};