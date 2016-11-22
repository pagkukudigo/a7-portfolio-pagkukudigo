import React from 'react';
import $ from 'jquery';
import Baby from 'babyparse';
// import projectData from '../data/data.csv';

var ProjectCard = React.createClass({
    render() {
		return (
			<div className="card medium col s12 m6 l4">
                <div className="card-image">
                    <img src={this.props.data.image} alt="project"></img>
                </div>
                <div className="card-content">       
                    {this.props.data.name}<br></br>{this.props.data.description}
                </div>
                <div className="card-action">
                    <a href={this.props.data.url}>VIEW HERE</a>
                </div>
            </div>
		);
	}
});

var Projects = React.createClass({
    
    getInitialState:function() {
        return {
            projectArray: []
        }
    }, 

    componentDidMount() {
        // console.log(this.state.projectArray);
        $.get('../data/data.json').then(function(data) {
            console.log(data.assignments);
            this.setState({projectArray:data.assignments}); 
        }.bind(this));
        console.log(this.state.projectArray);
    },
 
    render:function() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.projectArray.map(function(d, i) {
                        console.log({d});
                        return <ProjectCard key={'project' + i} data={d} />
                    })}
                </div>
            </div>    
        )
    }
    
});

export default Projects;