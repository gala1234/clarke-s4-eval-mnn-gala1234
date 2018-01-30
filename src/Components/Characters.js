import React from 'react';


class Characters extends React.Component {
render() {
	return(
		<div>
		<h2>{this.props.name}</h2>
		<img className="Article__img" alt={this.props.name} src={this.props.image} />
		<p>{this.props.house}</p>
		<p>{this.props.alive}</p>
		</div>
	);
}

}


export default Characters;
