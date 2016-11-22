import React from 'react';
import './css/HomePage.css';

var HomePage = React.createClass({
    render() {
        return(
            <div className="container home">
                <div>
                    <h2>INFO 343 C Portfolio</h2>
                    <h3>Saralyn Santos, Autumn 2016</h3>
                    <div>
                        Welcome to my portfolio!
                        <br/>
                        This is a collection of all the work I did and everything I learned in INFO 343 over Autumn Quarter 2016. Click the links above to navigate around.
                        <br/>
                        Thanks for visiting!</div>
                </div>
            </div>
        )
    }
});

export default HomePage;