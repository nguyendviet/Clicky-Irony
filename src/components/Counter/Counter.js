import React from 'react';
import PanelBody from './PanelBody';

class Counter extends React.Component {
    // set initial state of Counter
    state = {
        count: 0
    };

    // handleIncrement increases this.state.count by 1
    handleIncrement = () => {
        this.setState({count: this.state.count + 1});
    };

    render() {
        return (
        <div>
            <PanelBody
                count={this.state.count}
            />
        </div>
        );
    }
}

export default Counter;
