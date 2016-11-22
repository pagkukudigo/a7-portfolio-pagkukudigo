import React from 'react';
import $ from 'jquery';

var ProjectCard = React.createClass({
    render() {
		return (
			<div className="card medium col s12 m6 l4">
                <div className="card-image">
                    <img src={this.props.data.image} alt="project"></img>
                </div>
                <div className="card-content">       
                    {this.props.data.name}<br></br>
                </div>
                <div className="card-action">
                    <a href={this.props.data.external_urls.spotify}>VIEW HERE</a>
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
      $.get('../data/data.json').then(function(data) {
            console.log(data.assignments);
            this.setState({projectArray: data.assignments});    
      }.bind(this));
      console.log("array: ");
      console.log(this.state.projectArray);
    },
 
    render:function() {
        return (
            <div className="row">
                {this.state.projectArray.map(function(d, i) {
                    console.log({d});
                    return <ProjectCard key={'project' + i} data={d} />
                })}
            </div>    
        )
    }
    
});

export default Projects;