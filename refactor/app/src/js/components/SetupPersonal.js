/** @jsx React.DOM */

var React = require('react');

var SetupPersonal = React.createClass({

	render: function() {
		return (
			<section id="page-content">
				<section className="main-wrap">
					<div className="content-head">
						<div className="head-figure">
							<span className="sprite header-figure-profile"></span>
						</div>
						Hello World
						<h1><span className="thin">Setup</span> Your Information </h1>
					</div>
				</section>
			</section>
		);
	}

});

module.exports = SetupPersonal;