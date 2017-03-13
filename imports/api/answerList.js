import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const answerList = new Mongo.Collection('answers');

if (Meteor.isServer) {
	Meteor.publish('answerPublication', function answerPublication() {
		return answerList.find();
	});
}

Meteor.methods({
	'answer.insert'(question_id, answer_text, sequence, is_correct) {
		check(question_id, String);
		check(answer_text, String);
		check(sequence, Number);
		check(is_correct, Boolean);

		return answerList.insert({
			question_id,
			answer_text,
			sequence,
			is_correct,
			create_dt: new Date(),
		});
	},
});