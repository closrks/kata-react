/** @jsx React.DOM */

var React = require('react'),
	SetupPersonal = require('./components/SetupPersonal');

React.renderComponent(
	<SetupPersonal />,
	document.getElementById('app'),
	function() {
		console.log('React.render: SetupPeronsal')
	}
);