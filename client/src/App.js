import React, {Component} from 'react';
import Button from './components/Button';
import ButtonAPI from './utils/ButtonAPI';
import './App.css';
import io from 'socket.io-client';

const socket = io();

class App extends Component {
    // declare initial state of the button in React
    state = {
        pressed: false
    }

    // when component mounts, get state of the button from MySQL
    componentDidMount(){
        socket.on('connect', () => {
            console.log('connected')
        });

        socket.on('press', () => {
            this.getPressedState();
        });

        this.getPressedState();
    }

    // calls the API method to get the state of the button from MySQL
    getPressedState = () => {
        ButtonAPI.getButtonState().then(currentState => {
            // update the state in React from response from the API call
            let pressed = currentState.data[0].pressed;
            this.setState({ pressed });
        });
    }

    // calls the API Method to update the state of the button in MySQL database
    changePressedState = () => {
        ButtonAPI.changeButtonState(!this.state.pressed).then(newStateResults => {
            // call getPressedState to update the state of the button in React
            socket.emit('press', 'The button was pressed');
            this.getPressedState();
        });
    }

    render() {
        return (
            <div className='main-app'>
                <Button press={this.changePressedState} pressedState={this.state.pressed} />
            </div>
        );
    }
}

export default App;
