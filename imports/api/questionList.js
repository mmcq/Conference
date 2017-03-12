import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const questionList = new Mongo.Collection('questions');

if (Meteor.isServer) {
	Meteor.publish('questionPublication', function questionPublication() {
		return questionList.find();
	});
}

Meteor.methods({
	'question.insert'(question_text, sequence) {
		check(question_text, String);
		check(sequence, Number);

		questionList.insert({
			question_text,
			sequence: sequence,
			create_dt: new Date(),
		});
	},

	'question.remove'(question_id) {
		check(question_id, String);

		questionList.remove(question_id);
	},
});