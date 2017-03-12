import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { quizList } from '/imports/api/quizList.js';

import '/imports/ui/layouts/splashLayout.html'

Template.splashLayout.onCreated(function splashLayoutOnCreated() {
	//console.log('IN: splashLayout.onCreated();');
	Meteor.subscribe('quizPublication');
});

Template.splashLayout.helpers({
	quiz_data() {
		//console.log('IN: splashLayout.helpers.quiz_data();');
		return quizList.find({}, { sort: { created_dt: -1 } });
	},
});

Template.splashLayout.events({
	'click .splash-start'(event) {
		//console.log('IN: splashLayout.events.click;')
		Router.go('/quiz');
	},
});
