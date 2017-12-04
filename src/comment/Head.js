import React, {Component} from 'react'

import '../styles/Head.scss'
class Head extends Component{
    back() {
        // history.back()
        this.props.fun()
    }
    render(){
        return (
            <div className="head">
                <span onClick={()=>{this.back()}}></span>
                <div className="tittle">{this.props.tittle}</div>
            </div>
        )
    }
}

export default Head