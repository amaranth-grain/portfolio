import React, { Component } from 'react';

class Redirect extends Component {
	render() {
		window.location.href = this.props.url;
		return <h3 className="text-center py-5">Redirecting . . .</h3>
	}
}

export default Redirect;
