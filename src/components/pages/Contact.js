import React, { Component } from 'react';
import InfoBlock from "../ui/layout/InfoBlock";
import TextBlock from "../ui/layout/TextBlock";
import ContactImg from "../../img/email.png";
import ContactBlock from '../ui/layout/ContactBlock';
import OrangeButton from '../ui/buttons/OrangeButton';

class Contact extends Component {
	render() {
		return (
			<div className="text-center mb-5">
				<InfoBlock img={ContactImg} title="Contact Me"/>
				<ContactBlock />
				<OrangeButton text="Download Resume" />
			</div>
		);
	}
}

export default Contact;
