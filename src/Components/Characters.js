import React from 'react';


class Characters extends React.Component {
render() {
	return (
		<article className="Article">
		<div className="Article__name--div">
		<h2 className="Article__name">{this.props.name}</h2>
		</div>
		<div className="Article__img--div" title={this.props.name} style={{backgroundImage:`url(${this.props.image})`}}>
		<img className="Article__img" src={this.props.image}  alt={this.props.name}  />
		</div>
		<div className="Article__spans--div">
		<span className={`icon icon--${this.props.house}`}></span>
		<span className={`icon icon--${this.props.alive}`}></span>
		</div>
		</article>
	);
}

}


export default Characters;
