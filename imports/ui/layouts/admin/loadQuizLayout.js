import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Quizzes } from '/imports/api/quizList.js';
import { Questions } from '/imports/api/questions.js';

import '/imports/ui/layouts/admin/loadQuizLayout.html';
/*
import { Tasks } from '/imports/api/tasks.js';

Meteor.call('tasks.insert', 'What is a task?');
*/

Template.loadQuizLayout.events({
	'click .load-quiz-initialize-database'(event) {
		Meteor.call('quiz.insert', 'Astra-Zeneca Quiz', new Date());

		Meteor.call('questions.insert', 'What is your name?', 1);
		Meteor.call('questions.insert', 'What is your quest?', 2);
		Meteor.call('questions.insert', 'What is your favorite color?', 3);
		Meteor.call('questions.insert', 'What is the capital of Assyria?', 4);
	},
});
