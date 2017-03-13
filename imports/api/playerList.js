import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const playerList = new Mongo.Collection('players');

if (Meteor.isServer) {
	Meteor.publish('playerPublication', function playerPublication() {
		return playerList.find();
	});
}

Meteor.methods({
	'player.insert'() {
		playerList.insert({
			create_dt: new Date(),
		});
	},
});