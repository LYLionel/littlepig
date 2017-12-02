import React, {Component} from 'react'
import * as actions from '../redux/action'
import { connect } from 'react-redux'

// import {Link} from 'react-router'
import Title from '../comment/Title'

import Carousel from '../comment/Carousel'

import Search from '../comment/Search'

import SearchTab from '../comment/SearchTab'


class Index extends Component{
    constructor(props) {
        super(props)
        this.goList = this.goList.bind(this)
    }
    goList() {
        this.props.history.push('/list')
    }
    render(){
        return (
            <div id="indexbox">
                <Title/>
                <Carousel/>
                <Search fun={this.goList}/>
                <SearchTab/>
                <button onClick={this.props.setA}>国家</button>
                <div>A:{this.props.a}</div>
            </div>
        )
    }
}


export default connect(
    (state) => {
        return {
            a: state.country
        }
    },
    (dis) => {
        return {
            setA(){
                actions.setCountry(dis,'waiguo')
            }
        }
    }
)(Index)