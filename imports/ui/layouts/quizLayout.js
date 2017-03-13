import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { quizList } from '/imports/api/quizList.js';
import { questionList } from '/imports/api/questionList.js';

import '/imports/ui/layouts/quizLayout.html';

Template.quizLayout.onCreated(function splashLayoutOnCreated() {
	//console.log('IN: quizLayout.onCreated();');
	Meteor.subscribe('playerPublication');
	Meteor.subscribe('quizPublication');
	Meteor.subscribe('questionPublication');

	// Add a player record to establish an ID
	Meteor.call('player.insert');
});

Template.quizLayout.helpers({
	quiz_data() {
		//console.log('IN: quizLayout.helpers.quiz_data();');
		return quizList.find({}, { sort: { created_dt: -1 } });
	},

	question_data() {
		console.log('IN: quizLayout.helpers.question_data();');
		//return questionList.find({}, { sort: { sequence: 1 } });
		console.log(questionList.find().fetch());
		return questionList.find();
	},

	question_count() {
		console.log('IN: quizLayout.helpers.question_count();');
		//return questionList.find({}, { sort: { sequence: 1 } });
		return questionList.find().count();
	},
});

Template.quizLayout.events({
	'click .splash-start'(event) {
		//console.log('IN: quizLayout.events.click;')
		Router.go('/quiz');
	},
});

