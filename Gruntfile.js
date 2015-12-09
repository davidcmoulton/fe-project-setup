module.exports = function (grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    
    path: {
      src: {
        css: ['src/css/**/*.css', 'src/css/**/*.map'],
        images: ['src/images/**/*.svg', 'src/images/**/*.gif', 'src/images/**/*.png', 'src/images/**/*.jpg'],
        //js: ['src/js/**/*.js'],
        js: ['src/js'],
        scss: ['src/scss/**/*.scss'],
        statichtml: ['src/static-html/**/*.html']
      },
      dest: 'dist',
      config: 'config'

    },
    
    clean: {
      files: ['<%= path.src.css %>', '<%= path.dest %>/**/*', '.sass-cache']
    },
    
    compass: {
      layouts: {
        options: {
          sourcemap: true,
          config: '<%= path.config %>/config.rb'
        }
      }
    },
    
    copy: {
      css: {
        files: [
          {
            src: ['<%= path.src.css %>'],
            dest: '<%= path.dest %>/css/',
            expand: true,
            filter: 'isFile',
            flatten: true
          }
        ]
      },
      
      js: {
        files: [
          {
            src: ['<%= path.src.js %>/**/*.js'],
            dest: '<%= path.dest %>/js/',
            expand: true,
            filter: 'isFile',
            flatten: true
          }
        ]
      },
      
      images: {
        files: [
          {
            src: ['<%= path.src.images %>'],
            dest: '<%= path.dest %>/images/',
            expand: true,
            filter: 'isFile',
            flatten: true
          }
        ]
      },
      
      statichtml: {
        files: [
          {
            src: ['<%= path.src.statichtml %>'],
            dest: '<%= path.dest %>/',
            expand: true,
            filter: 'isFile',
            flatten: true
          }
        ]        
      },
      
      scss: {
        files: [
          {
            src: ['<%= path.src.statichtml %>'],
            dest: '<%= path.dest %>/',
            expand: true,
            filter: 'isFile',
            flatten: true
          }
        ]
      }
    },

    jscs: {
      src: [
        '<%= path.src.js %>/**/*.js',
        '!<%= path.src.js %>/libs/**/*.js'
      ],
      options: {
        //preset: 'airbnb'
        config: '<%= path.config %>/.jscsrc'
      }
    },

    jshint: {
      src: [
        '<%= path.src.js %>/**/*.js',
        '!<%= path.src.js %>/libs/**/*.js'
      ],
      options: {
        jshintrc: '<%= path.config %>/.jshintrc'
      }
    },

    watch: {
      options: {
        interupt: true
      },
      js: {
        files: ['<%= path.src.js %>', 'Gruntfile.js'],
        tasks: ['lintJs', 'copy:js']
      },
      scss: {
        files: ['<%= path.src.scss %>'],
        tasks: ['compass', 'copy:css']
      },
      markup: {
        files: ['<%= path.src.templates %>/**/*.mustache', '<%= path.src.data %>/**/*.json'],
        tasks: ['render']
      },
      statichtml: {
        files: ['<%= path.src.statichtml %>'],
        tasks: ['copy:statichtml']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: ['<%= path.dest %>/**/*']
      }
    }

  });
  
  grunt.registerTask('assemble', ['compass', 'copy']);
  grunt.registerTask('lintJs', ['jshint', 'jscs']);

  grunt.registerTask('default', ['lintJs', 'assemble']);
  grunt.registerTask('watch', ['lintJs', 'assemble', 'watch']);
  grunt.registerTask('freshen', ['clean', 'default']);
  
};
