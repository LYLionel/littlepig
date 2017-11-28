import React, {Component} from 'react'

import { BrowserRouter as Router , Switch , Route} from 'react-router-dom'

import Index from '../pages/Index'
import City from '../pages/City'
class App extends Component{
    render(){
        return(
            <Router>
               <Switch>
                <Route exact path="/" component={Index}></Route>
                <Route path='/city' component={City} ></Route>
               </Switch> 
            </Router>
            
        )
    }
}

export default App