import React, {Component} from 'react'

// import {Link} from 'react-router'
import Title from '../comment/Title'

import Carousel from '../comment/Carousel'

import Search from '../comment/Search'

import SearchTab from '../comment/SearchTab'


class Index extends Component{
    render(){
        return (
            <div id="indexbox">
                <Title/>
                <Carousel/>
                <Search/>
                <SearchTab/>
            </div>
        )
    }
}

export default Index