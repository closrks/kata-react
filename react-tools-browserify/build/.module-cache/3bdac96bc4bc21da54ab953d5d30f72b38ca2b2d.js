var MessageBox = React.createClass({displayName: "MessageBox",
	render: function () {

	}
});

var SubMessage = React.createClass({displayName: "SubMessage",
	render: function () {

	}
});

var reactComponent = React.renderComponent(
	React.createElement(MessageBox, null),
	document.getElementById('app')
);