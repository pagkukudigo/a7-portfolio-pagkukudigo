import React from 'react';

var ProjectCard = React.createClass({
    render() {
		return (
			<div className="card medium col s12 m6 l4">
                <div className="card-image">
                    <img src={this.props.data.album.images[0].url} alt="project"></img>
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
            projectArray: {data}
        }
    },
    
    render:function() {
        return (
            <div>
                {this.state.projectArray.map(function(d, i) {
                    return <ProjectCard key={'project'+i} data={d}/>
                })}
            </div>
            
        )
    }
    
});

export default Projects;