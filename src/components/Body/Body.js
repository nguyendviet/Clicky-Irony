import React, {Component} from 'react';
import NavBar from '../NavBar';
import CharacterCard from '../CharacterCard';
import Counter from '../Counter';
import Wrapper from '../Wrapper';
import Title from '../Title';
import characters from '../../characters.json';
import './Body.css';

class Body extends Component {
    // set this.state.characters to characters array
    state = {
        characters
    };

    counter = () => {
        this.setState({count: this.state.count + 1});
    };

    shuffleChar = id => {
        // shuffle array
        const characters = this.state.characters.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
        // set this.state.characters equal to new characters array
        this.setState({characters});
    };

  // map this.state.characters then render a CharacterCard for each character object
    render() {
        return (
            
            <Wrapper>
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

export default Body;