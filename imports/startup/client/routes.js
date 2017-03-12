Router.configure({
  layoutTemplate: 'splashLayout'
});
 
Router.route('/splash', function () {
  //this.render('splashLayout');
  this.layout('splashLayout');
});
 
Router.route('/quiz', function () {
  //this.render('quizLayout');
  this.layout('quizLayout');
});

Router.route('/admin', function () {
  this.layout('/loadQuizLayout');
});
