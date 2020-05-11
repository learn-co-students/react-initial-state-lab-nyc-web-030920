import React from "react";

// your Bomb code here!
class Bomb extends React.Component {

    constructor(props){
        super();
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render(){
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
        
        return (
            <h3>{message}</h3>
        )
    }
}
export default Bomb;