import React from 'react';
import Characters from './Characters';
import './App.css';


class App extends React.Component {
	constructor(props) {
		super(props);

		this.handleSearch=this.handleSearch.bind(this);

		this.state = {
			charactersArr: []
		};
	}

	componentDidMount() {
		fetch('http://hp-api.herokuapp.com/api/characters')
		.then(response => response.json())
		.then(json => {
			this.setState({
				charactersArr:json
			});
		});
	}

paintCharacter() {
	let CharacterToShow = this.state.charactersArr;
	return (<ul>
		{
			CharacterToShow.map(
				character => <article className="Article">
				<Characters name={character.name} image={character.image} house={character.house} alive={character.alive? 'live':'dead'} />
				</article>

			)
		}
		</ul>
	)
}

handleSearch (event) {

}


  render() {
    return (
      <div className="App">
			<h1 className="Title">My Harry Potter Characters</h1>
			<input className="Search" type="text" onChange={ this.handleSearch }></input>
			{ this.paintCharacter() }
      </div>
    );
  }
}

export default App;
