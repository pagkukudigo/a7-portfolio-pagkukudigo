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
                        <i>Pagkukudigo</i>, the Tagalog (Filipino) word for "coding", is my GitHub username for two reasons: 1) at its core, INFO 343 is a class all about coding, and 2) it was the first word that came to mind and I just wanted to create my account so I could get the homework started.
                        Although the story behind my username is a little weird, I hope you enjoy seeing the development of my <i>pagkukudigo</i>, my coding, over the quarter! This is a collection of all the work I did and everything I learned in INFO 343 over Autumn Quarter 2016. 
                        <br/><br/>
                        Click the links above to navigate around.
                        <br/>
                        Thanks for visiting!</div>
                </div>
            </div>
        )
    }
});

export default HomePage;