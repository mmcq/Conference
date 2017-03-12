import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Quiz } from '/imports/api/quizList.js';
import { Question } from '/imports/api/questionList.js';

import '/imports/ui/layouts/admin/loadQuizLayout.html';
/*
import { Tasks } from '/imports/api/tasks.js';

Meteor.call('tasks.insert', 'What is a task?');
*/

Template.loadQuizLayout.events({
	'click .load-quiz-initialize-database'(event) {
		Meteor.call('quiz.insert', 'Astra-Zeneca Quiz', new Date());

		Meteor.call('question.insert', 'What is your name?', 1);
		Meteor.call('question.insert', 'What is your quest?', 2);
		Meteor.call('question.insert', 'What is your favorite color?', 3);
		Meteor.call('question.insert', 'What is the capital of Assyria?', 4);
	},
});
