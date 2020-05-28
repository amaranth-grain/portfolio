import React, { Component } from 'react';

class Redirect extends Component {
	render() {
		window.location.href = this.props.url;
		return null;
	}
}

export default Redirect;
