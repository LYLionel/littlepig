import React, {Component} from 'react'

import { BrowserRouter as Router , Route, Link} from 'react-router-dom'

import Index from '../pages/Index'
class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Index}></Route>
                </div>
            </Router>
        )
    }
}

export default App