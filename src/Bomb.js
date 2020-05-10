// your Bomb code here!


import React, { Component } from 'react';

class Bomb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }
  bombTimer = () => {
    if (!this.props.initialCount > 0) {
        return <p>Boom!</p>
    } else {
      return <p>{this.props.initialCount } seconds left before I go boom!</p>
    }
  }
  
  render() {

    return (
      <div>
      
        {this.bombTimer()} 
      </div>
    );
  }
}

export default Bomb;
