import React, {Component} from 'react'

import { BrowserRouter as Router , Route} from 'react-router-dom'

import List from '../pages/List'
class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={List}></Route>
                </div>
            </Router>
        )
    }
}

export default App