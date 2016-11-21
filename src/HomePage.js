import React from 'react';
import './css/HomePage.css';

var HomePage = React.createClass({
    render() {
        return(
            <div className="container home">
                <div>
                    <h1>INFO 343 C Portfolio</h1>
                    <h3>Saralyn Santos, Autumn 2016</h3>
                    <div>Welcome to my portfolio! This is a collection of all the work I did in INFO 343 over the quarter. Click the links above to navigate around. Thanks for visiting!</div>
                </div>
            </div>
        )
    }
});

export default HomePage;