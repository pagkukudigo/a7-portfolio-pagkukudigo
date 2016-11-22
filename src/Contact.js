import React from 'react';
import './css/Contact.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import linkedin from './img/linkedin.png';
import email from './img/email.png';
/* import Firebase from 'firebase';
import $ from 'jquery';


var firebase = require('firebase');
var app = firebase.initializeApp({
    apiKey: "AIzaSyDdYzrLeY5Qj7aRdL089ZHy4TKAKE8jYFk",
    authDomain: "portfolio-14c2b.firebaseapp.com",
    databaseURL: "https://portfolio-14c2b.firebaseio.com",
    storageBucket: "portfolio-14c2b.appspot.com",
    messagingSenderId: "787672924537"
}); */

var Contact = React.createClass({
    render() {
		return (
			<div className="container">
                <h2>Contact Me</h2>
                <p>If you would like to get in contact with me, you can get in touch with me via the following locations:</p>   
                <div className="row links">
                    <a href="https://www.linkedin.com/in/saralynsantos"><img src={linkedin} alt="LinkedIn logo" /></a>
                    <a href="mailto:saralyns@uw.edu"><img src={email} alt="email logo" height="108"/></a>
                </div>
			</div>
		);
	}
});

export default Contact;