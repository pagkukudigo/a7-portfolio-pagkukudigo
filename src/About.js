import React from 'react';
import './css/About.css';

var AboutPage = React.createClass({
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="image col s3"></div>
                    <div className="about col s8">
                        <h1>About Me</h1>
                        <p>Hello! My name is Saralyn Santos and I am a junior at the University of Washington. I am an Informatics major intending to specialize in Human-Computer Interaction. After I graduate from UW, I hope to go into video game design, using the skills I have acquired here in the iSchool to create video games that represent a diverse array of characters in a unique, thoughtful, and respectful way. Outside of Informatics, I am also involved in the <a href="http://students.washington.edu/fasa/">Filipino American Student Association</a> here at UW, where I serve as secretary. In my free time, I enjoy playing video games, watching musicals, playing the flute, and dancing.</p>
                    </div>
                </div>
            </div>
        )
    }
});

export default AboutPage;