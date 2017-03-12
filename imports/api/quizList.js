import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const quizList = new Mongo.Collection('quizzes');

if (Meteor.isServer) {
	Meteor.publish('quizPublication', function quizPublication() {
		return quizList.find();
	});
}

Meteor.methods({
	'quiz.insert'(quiz_name, quiz_date) {
		check(quiz_name, String);
		check(quiz_date, Date);

		quizList.insert({
			quiz_name: quiz_name,
			quiz_date: quiz_date,
			create_dt: new Date(),
		});
	},
});