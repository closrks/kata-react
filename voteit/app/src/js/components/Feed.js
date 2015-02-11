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
			items: FEED_ITEMS,
			formDisplayed: false
		};
	},

	onToggleForm: function () {
		this.setState({
			formDisplayed: !this.state.formDisplayed
		});
	},

	onNewItem: function (newItem) {
		var newItems = this.state.items.concat([newItem]);
		this.setState({
			items: newItems,
			formDisplayed: false
		});
	},

	onVote: function(item) {
		console.log(item)
	},

	render: function () {
		return (
			<div>

				<div className="container">
					<ShowAddButton displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm} />
				</div>

				<FeedForm displayed={this.state.formDisplayed} onNewItem={this.onNewItem} />

				<br />
				<br />

				<FeedList items={this.state.items} onVote={this.onVote} />

			</div>
		);
	}

});

module.exports = Feed;