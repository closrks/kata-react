/** @jsx React.DOM */

var React = require('react'),
	ShowAddButton = require('./ShowAddButton'),
	FeedForm = require('./FeedForm'),
	FeedList = require('./FeedList');

var Feed = React.createClass({

	getInitialState: function () {
		var FEED_ITEMS = [
			{ key: '1', title: 'a', description: 'a', voteCount: 1 },
			{ key: '2', title: 'b', description: 'b', voteCount: 2 },
			{ key: '3', title: 'c', description: 'c', voteCount: 3 }
		];
		return {
			items: FEED_ITEMS
		};
	},

	render: function () {
		return (
			<div>

				<div className="container">
					<ShowAddButton />
				</div>

				<FeedForm />

				<br />
				<br />

				<FeedList items={this.state.items} />

			</div>
		);
	}

});

module.exports = Feed;