import React, {Component} from 'react';
import '../styles/Title.scss'
class Title extends Component{
    render(){
        return(
            <div className="logo_box">
                <a href="javascript:;"><img src="https://m.xiaozhu.com/images/logo.png" alt="小猪" className="logo"/></a>
                <a href="javascript:;" className="logo_left"><img src="https://m.xiaozhu.com/v_6843a/images/head_icon.png" alt=""/></a>
            </div>
        )
        
    }
}

export default Title