import React from 'react'

import axios from "axios"

class SearchTab extends React.Component{
    constructor(props){
        super(props)
    }
    state = {
        data: []
    }
    componentDidMount(){
        axios.get('/api/btnlist.php').then((res)=>{
            console.log(res)
        })
    }

    render(){
        return(
          <div>
            <div><img src="../" alt=""/></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>  
        )
        
    }
}

export default SearchTab