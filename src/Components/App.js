import React from 'react';
import Characters from './Characters';
import './App.css';


class App extends React.Component {
	constructor(props) {
		super(props);

		this.handleSearch=this.handleSearch.bind(this);

		this.state = {
			charactersArr: [],
			lettersOnSearch:''
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
	const CharacterToShow = this.state.charactersArr.filter(filteredItem => filteredItem.name.toLowerCase().includes(this.state.lettersOnSearch)); //Pasamos una condicion que debe cumplir cada item, si cumplen van dentro, si no, se quedan fuera de la función.
	return (<ul className="Articles">
		{
			CharacterToShow.map(
				item =>
				<Characters name={item.name} image={item.image}
				house={item.house}
				alive={item.alive?
					'live':'dead'} />
			)
		}
		</ul>
	)
}

handleSearch (event) {
let characterSearched = event.currentTarget.value;
// console.log(characterSearched);
this.setState({
	lettersOnSearch:characterSearched.toLowerCase()
});
}


  render() {
		console.log(this.state.lettersOnSearch);
    return (
      <div className="App">
			<header className="Header">
			<h1 className="Header__title">My Harry Potter Characters</h1>
			<p className="Header__paragraph">You are on the Potter's App, here you can search your favourite characters by name and sow his/her/it information. Enjoy it!</p>
			<input className="Header__search" type="text" placeholder="Search a character" onChange={ this.handleSearch } />
			</header>
			<main className="Main">
			{ this.paintCharacter() }
			</main>
			<footer className="Footer">
			<span>Harry's App &copy; by
			<a className="Footer__link--gala" href="www.galacalero.com"> Gala Calero</a>
			</span>
			<a className="Footer__link--adalab-color" href="http://www.adalab.es/" title="Adalab">
			<div className="Footer__link--adalab"></div>
			</a>
			</footer>
      </div>
    );
  }
}

export default App;
