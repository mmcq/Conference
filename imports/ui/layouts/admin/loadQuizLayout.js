import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { quizList } from '/imports/api/quizList.js';
import { questionList } from '/imports/api/questionList.js';
import { answerList } from '/imports/api/answerList.js';

import '/imports/ui/layouts/admin/loadQuizLayout.html';

Template.loadQuizLayout.events({
	'click .load-quiz-initialize-database'(event) {
		// Add the quiz record
		Meteor.call('quiz.insert', 'Astra-Zeneca Quiz', new Date(), function(error, quiz_id) {
			// Add the question records
			console.log('quiz_id: ' + quiz_id);
			Meteor.call('question.insert', quiz_id, 'What is your name?', 1, function(error, question_id) {
				console.log('question_id(1): ' + question_id);
				Meteor.call('answer.insert', question_id, 'Sir Arthur, King of the Britons', 1, true);
				Meteor.call('answer.insert', question_id, 'The Brave Sir Roberts', 2, false);
				Meteor.call('answer.insert', question_id, 'Brian', 3, false);
				Meteor.call('answer.insert', question_id, 'Brian', 4, false);
			});
			Meteor.call('question.insert', quiz_id, 'What is your quest?', 2, function(error, question_id) {
				console.log('question_id(2): ' + question_id);
				Meteor.call('answer.insert', question_id, 'To seek the unholy grail', 1, true);
				Meteor.call('answer.insert', question_id, 'To find my captain\'s wafers', 2, false);
				Meteor.call('answer.insert', question_id, 'To seek the holy grail', 3, true);
				Meteor.call('answer.insert', question_id, 'Find a better quest', 4, false);
			});
			Meteor.call('question.insert', quiz_id, 'What is your favorite color?', 3, function(error, question_id) {
				console.log('question_id(3): ' + question_id);
				Meteor.call('answer.insert', question_id, 'Red', 1, false);
				Meteor.call('answer.insert', question_id, 'Blue', 2, false);
				Meteor.call('answer.insert', question_id, 'Clear', 3, true);
				Meteor.call('answer.insert', question_id, 'Rainbow', 4, false);
			});
			Meteor.call('question.insert', quiz_id, 'What is the capital of Assyria?', 4, function(error, question_id) {
				console.log('question_id(4): ' + question_id);
				Meteor.call('answer.insert', question_id, 'Constantinople', 1, false);
				Meteor.call('answer.insert', question_id, 'Assyria', 2, false);
				Meteor.call('answer.insert', question_id, 'Throw me off', 3, false);
				Meteor.call('answer.insert', question_id, 'I don\'t know that', 4, true);
			});
		});

		// Add the answer records

	},
});
