import React from 'react';
export default class Bomb extends React.Component {
 
    
    constructor(props){
        super()
        this.state={
            secondsLeft : props.initialCount
        }
    }
    render(){
        return(<div>{this.ifBoom(this.props.initialCount)}</div>)
    }
    ifBoom(props){
        let numReturn= `${props} seconds left before I go boom!`
        return props ? numReturn : "Boom!"
    }
}