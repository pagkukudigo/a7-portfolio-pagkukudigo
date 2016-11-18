import React from 'react';

// PageOne Component
var ProjectCard = React.createClass({
	// parse data.json
    // map
    
    
    render() {
		return (
			<div className="card medium col s12 m6 l4">
                <div className="card-image">
                    <img src={this.props.data.album.images[0].url}></img>
                </div>
                <div className="card-content">       
                    {this.props.data.name}<br></br>{this.}
                </div>
                <div className="card-action">
                    <a href={this.props.data.external_urls.spotify}>LISTEN ON SPOTIFY</a>
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
    
    render:function() {
        return (
            <div>
                {this.state.projectArray.map(function(d, i) {
                    return <ProjectCard key={'project'+i data={d}} />
                    console.log(this);
                })}
            </div>
            
        )
    }
    
});

export default Projects;