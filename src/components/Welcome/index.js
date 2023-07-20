// Write your code here
import './index.css'
import {Component} from 'react'

class Welcome extends Component {

    state = {isSubscribed: true}

    changeBtn = () => {
        const {isSubscribed} = this.state
        if(isSubscribed === true){
            this.setState({isSubscribed = false})
        }
        else{
            this.setState({isSubscribed = true})
        }
    }

    

    render() {
        const {isSubscribed} = this.state

        return (
            <div className = "bg-container">
                <h1 className = "heading">Welcome</h1>
                <p className = "description">Thank you! Happy Learning</p>
                {isSubscribed ? (<button className = "subscribe-btn" type = "button" onClick = {this.changeBtn}>Subscribed</button>):
                (<button className = "subscribe-btn" type = "button" onClick = {this.changeBtn}>Subscribe</button>)}
            </div>
        )
    }
}

export default Welcome