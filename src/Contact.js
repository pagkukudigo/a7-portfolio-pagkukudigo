import React from 'react';
import './css/Contact.css';

var Contact = React.createClass({
	render() {
		return (
			<div className="contact">
                <a href="https://www.linkedin.com/in/saralynsantos" className="contactLink">LinkedIn</a> | <a href="mailto:saralyns@uw.edu" className="contactLink">Email</a>
			</div>
		);
	}
});

export default Contact;