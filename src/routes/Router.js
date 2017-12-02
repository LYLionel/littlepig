import React, {Component} from 'react'

import { BrowserRouter as Router , Switch , Route} from 'react-router-dom'

import Index from '../pages/Index'
import City from '../pages/City'
import List from '../pages/List'
class App extends Component{
    render(){
        return(
            <Router>
               <Switch>
                <Route exact path="/" component={Index}></Route>
                <Route path='/city' component={City} ></Route>
                <Route path="/list" component={List}></Route>
               </Switch> 
            </Router>
            
        )
    }
}

export default App