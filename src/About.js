import React from 'react';
import './css/About.css'

var AboutPage = React.createClass({
    render() {
        return(
            <div className="container about">
                <p>Hello!</p> 
                <p>My name is Saralyn Santos. I am a junior majoring in Informatics at the University of Washington. (Go Dawgs!)</p>
                <p>Through this portfolio, I aim to showcase my accomplishments over this quarter.</p>
                <p>Click the links above to travel to different pages!</p>
            </div>
        )
    }
});

export default AboutPage;