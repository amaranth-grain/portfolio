import React, { Component } from 'react';
import { Navbar } from "react-bootstrap";

class Footer extends Component {
	render() {
		return (
      <Navbar bg="dark" variant="dark" className="footer-bottom">
        <p className="m-auto p-2">
					Christy Yau © 2020
				</p>
      </Navbar>
		);
	}
}

export default Footer;
