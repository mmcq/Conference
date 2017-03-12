import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const dbQuestions = new Mongo.Collection('questions');

if (Meteor.isServer) {
	Meteor.publish('questionData', function questionsPublication() {
		return dbQuestions.find();
	});
}

Meteor.methods({
	'questions.insert'(question_text, sequence) {
		check(question_text, String);
		check(sequence, Number);

		dbQuestions.insert({
			question_text,
			sequence: sequence,
			create_dt: new Date(),
		});
	},

	'questions.remove'(question_id) {
		check(question_id, String);

		dbQuestions.remove(question_id);
	},
});