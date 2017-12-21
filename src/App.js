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
        count: 0,
        topScore: 0,
        clicked: [],
        message: ''
    };

    // handleIncrement increases this.state.count by 1
    handleIncrement() {
        this.setState({count: this.state.count + 1});

        // check if breaks top score
        if (this.state.count >= this.state.topScore) {
            this.setState({
                topScore: this.state.count + 1
            });
        }
    };

    shuffleChar() {
        const characters = this.state.characters.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
        // set this.state.characters equal to new characters array
        this.setState({characters});
    };

    // record clicked character
    clickedChar = id => {
        // add id of character to clicked array
        const clicked = [...this.state.clicked, id];
        this.setState({clicked});
    };

    clickChar = id => {
        // shuffle array
        this.shuffleChar();

        // if clicked array already has the chracter id
        if (this.state.clicked.includes(id)) {
            const message = `Ay! You've got the wrong one!`;
            this.setState({
                message: message, 
                count: 0, 
                clicked: []
            });
        }
        // if character id is not in clicked array
        else {
            const message = `Sweet, dude!`;
            this.setState({message: message});
            this.handleIncrement();
            this.clickedChar(id);
        }
    };

    // render page with navbar and each character
    render() {
        return ([
            <div key={0}>
                <NavBar
                    message={this.state.message}
                    count={this.state.count}
                    topScore={this.state.topScore}
                />
            </div>,
            <div key={1}>
                <Jumbotron/>
            </div>,
            <div key={2}>
                <Wrapper>
                    {this.state.characters.map(character => (
                        <CharacterCard
                            clickChar={this.clickChar}
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