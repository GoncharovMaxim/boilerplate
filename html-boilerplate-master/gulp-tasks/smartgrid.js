'use strict';

var smartgrid = require('smart-grid');

module.exports = function (gulp) {
  var smartgridSettings = {
    outputStyle: 'scss',
    columns: 12,
    offset: "10px",
    container: {
      'maxWidth': '1200px',
      'fields': '10px'
    },
    breakPoints: {
      lg: {
        'width': '1200px',
        'fields': '10px'
      },
      md: {
        'width': '992px',
        'fields': '10px'
      },
      sm: {
        'width': '768px',
        'fields': '10px'
      },
      xs: {
        'width': '576px',
        'fields': '10px'
      }
    }
  };

  gulp.task('smartgrid', function () {
    smartgrid('./src/sass', smartgridSettings);
  });
};

// https://github.com/dmitry-lavrik/smart-grid