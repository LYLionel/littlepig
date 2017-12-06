import React, {Component} from 'react'
import Carousel from '../comment/Carousel'
import Shopdetail from '../comment/Shopdetail'
import Footer from '../comment/Footer'
import Title from '../comment/Title'
import '../styles/City.scss'
class City extends Component{
    render(){
        return (
            <div id="detailsbox">
               <Title/>
               <Carousel />
               <Shopdetail />
               <Footer/>
            </div>
        )
    }
}

export default City