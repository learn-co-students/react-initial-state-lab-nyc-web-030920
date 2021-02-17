import React, { Component } from 'react';

class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    // currentBombTimer = () => {
    //     const currentTimeLeft = this.
        
    // }
    
    
    render() {
        // console.log(props.initialCount)
        return (
            <div>
                {/* {setTimeout(myFunction, 3000)} */}
                {this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!` }
                
            </div>
        );
    }
}

export default Bomb;
