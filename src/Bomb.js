// your Bomb code here!
export default class Bomb extends Component{
    ifBoom(props){
        let numReturn= `${props} seconds left before I go boom!`
        props ? numReturn : "Boom!"
    }
    
    constructor(){
        super()
        this.state={
            secondsLeft : props.initialCount
        }
    }
    render(){
        this.ifBoom(props.initialCount)
    }
}