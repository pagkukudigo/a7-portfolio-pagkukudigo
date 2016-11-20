import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';
// import '../node_modules/font-awesome/css/font-awesome.css'


class App extends Component {
  render() {
    return (
        <div className="App">
            <div className = "navbar">
                /*<Link className="link" activeClassName='active' to="/"><i className="fa fa-home"></i></Link>
                <Link className="link" activeClassName='active' to="/projects">Page 1</Link>
                <Link className="link" activeClassName='active' to="/about">Page 2</Link>
                <Link className="link" activeClassName='active' to="/contact">Contact</Link>*/
                <p>this is a test line</p>
            </div>
            <div className="children">
                {this.props.children}
            </div>
        </div>
    );
  }
}

export default App;
