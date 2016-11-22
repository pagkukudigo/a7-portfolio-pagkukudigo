import React from 'react';
import './css/Contact.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import linkedin from './img/linkedin.png';
import email from './img/email.png';

var Contact = React.createClass({
	render() {
		return (
			<div className="container">
                <h1>Contact Me</h1>
                <p>If you would like to get in contact with me, please leave a message below and I'll get back to you!</p>
                <div className="row">
                    <form className="col s12">
                      <div className="row">
                        <div className="input-field col s12">
                          <textarea id="textarea1" className="materialize-textarea"></textarea>
                        </div>
                      </div>
                    </form>
                </div>
                
                <p>In addition, you can get in touch with me via the following locations:</p>   
                <div className="row links">
                    <a href="https://www.linkedin.com/in/saralynsantos"><img src={linkedin} alt="LinkedIn logo" /></a>
                    <a href="mailto:saralyns@uw.edu"><img src={email} alt="email logo" height="108"/></a>
                </div>
			</div>
		);
	}
});

export default Contact;