'use strict';

module.exports = function(grunt) {
    grunt.loadTasks('tasks');
    grunt.registerTask('default', ['jshint', 'watch']);
};
