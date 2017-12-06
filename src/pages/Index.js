import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../redux/actions'

// import {Link} from 'react-router'
import Title from '../comment/Title'

import Carousel from '../comment/Carousel'

import Search from '../comment/Search'

import SearchTab from '../comment/SearchTab'

import Footer from '../comment/Footer'

class Index extends Component{
    constructor(props) {
        super(props)
        // console.log(this.props)
        // setTimeout(() => {
        //     this.props.setName('ccc')
        // }, 4000)
        // this.props.setName('bbb')
        this.changeCountry = this.changeCountry.bind(this)
        this.gotoList = this.gotoList.bind(this)
    }
    changeCountry(con){
        this.props.setCountry(con)
       
    }
    gotoList(){
        this.props.history.push('/list')
    }

    render(){
        return (
            <div id="indexbox">
                <Title/>
                <Carousel/>
                <Search onCountry = {this.changeCountry} fun={this.gotoList}/>
                <SearchTab/>
                <Footer/>
            </div>
        )
    }
}

export default connect(
    (state)=>{
        return{
            a: state.country,
            name: state.aaa.name
        }
    },
    (dispatch) => {
        return {
            setCountry: (con) =>{
                actions.country(dispatch,con)
            },
            setName(name) {
                dispatch({
                    type: 'change',
                    name
                })
            }
        }
    }
)(Index)