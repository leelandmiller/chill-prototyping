import React, {Component} from 'react';
import Button from './components/Button';
import './App.css';

class App extends Component {
    state = {
        pressed: false
    }

    componentDidMount(){
        this.getPressedState();
    }

    getPressedState = () => {
        //TODO: get pressed state from Server
        //TODO: changed state of button based on res from server
    }

    render() {
        return (
            <div className='main-app'>
                <Button pressedState={this.state.pressed} />
            </div>
        );
    }
}

export default App;
