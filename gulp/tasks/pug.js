'use strict';

//настроить инкрементальную сборку для больших проектов
module.exports = function() {
  $.gulp.task('pug', function() {
    return $.gulp.src($.config.src + '/template/pages/*.pug')
      .pipe($.gp.pug({ pretty: true }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
      .pipe($.gulp.dest($.config.root));
  });
};
