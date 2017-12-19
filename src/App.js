import React, {Component} from 'react';
import CharacterCard from './components/CharacterCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import characters from './characters.json';
import './App.css';

class App extends Component {
  // set this.state.characters to characters array
  state = {
    characters
  };

  counter = () => {
      this.setState({count: this.state.count + 1});
  };

  shuffleChar = id => {
    // filter characters array
    // const characters = this.state.characters.filter(character => character.id !== id);

    // shuffle array
    const characters = this.state.characters.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
    // set this.state.characters equal to new characters array
    this.setState({characters});
  };

  // map this.state.characters then render a CharacterCard for each character object
  render() {
    return (
      <Wrapper>
        <Title>Characters List</Title>
        {this.state.characters.map(character => (
          <CharacterCard
            shuffleChar={this.shuffleChar}
            id={character.id}
            key={character.id}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;