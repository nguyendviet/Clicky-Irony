import React, {Component} from 'react';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import CharacterCard from './components/CharacterCard';
import Wrapper from './components/Wrapper';
import characters from './characters.json';

class App extends Component {
    // set this.state.characters to characters array
    state = {
        characters,
        count: 0
    };

    // handleIncrement increases this.state.count by 1
    handleIncrement() {
        this.setState({count: this.state.count + 1});
    };

    shuffleChar = id => {
        // shuffle array
        const characters = this.state.characters.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
        // set this.state.characters equal to new characters array
        this.setState({characters});
        this.handleIncrement();
    };

    // render page with navbar and each character
    render() {
        return ([
            <div key={0}>
                <NavBar
                    count={this.state.count}
                />
            </div>,
            <div key={1}>
                <Jumbotron/>
            </div>,
            <div key={2}>
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
            </div>
        ]);
    };
}

export default App;