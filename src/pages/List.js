import React, {Component} from 'react'
import axios from 'axios'
import * as actions from '../redux/action'
import { connect } from 'react-redux'

import '../styles/List.scss'
import Head from '../comment/Head'
class List extends Component{
    constructor(props){
        super(props)
        this.state = {
            hotcity: [],
            classifycity: [],
            cityid: null,
            ulid: null,
            search: [],
            isList: false
        }
        this.onChangeIpt = this.onChangeIpt.bind(this)
        this.head = this.head.bind(this)
        setTimeout(() => {
            let list = this.state.hotcity.map((item,index)=>item.cityName)
            let a = this.state.classifycity.map((item)=>{
                return item.cityname
            })
            let b = []
            for(var i = 0; i<a.length;i++){
                a[i].map((item)=>{
                    b.push(item)
                })
            }
            let c = b.map((item)=>{
                return item.cityName
            })
            list.push(...c)
            this.data = Array.from( new Set(list) )
            console.log(this.data)
        }, 30);
    }
    onChangeIpt(e){
        if(e.target.value.length > 0){
            let aaa = this.data.filter((item,index,arr) => {
                if(item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1 ){
                    return item
                }
            })
            this.setState({
                isList: true,
                search: aaa
            })
            let ddd = this.state.search.map((item)=>{return item})
        }else{
            this.setState({
                isList: false
            })
        }
    }
    handleCity(id){
        this.setState({
            cityid: id
        })

    }
    handleUl(id){
        if (id === this.state.ulid) {
            this.setState({
                ulid: ''
            })
        }else{
            this.setState({
                ulid: id
            }) 
        }
    }
    head() {
        // this.props.history.push('/city')
        window.history.back()
    }
    render(){
        var that = this
        const isList = this.state.isList,
              search = this.state.search
        return (
            <div>
                <Head tittle="城市或目的地" fun={this.head} />
                <div className="search_on">
                    <input type="text" onChange={this.onChangeIpt} className="search_input" id="tb-city" placeholder="请输入城市或目的地"/>
                </div>
                <section id="search_box">
                    {
                        isList ? (
                            <div>
                                <ul className="search_in" style={{background:'#eee',height:'100%'}}>
                                    {
                                        search.map((item,index) => {
                                            return  <li key={item} onClick={()=>{
                                                    this.handleCity(item)
                                                }} className={item === this.state.cityid ? "hotcityli clickli" : "hotcityli" }>{item}</li>
                                        })
                                    }
                                </ul>
                            </div>
                        ) : (
                            <div>
                                <div className="search_T">热门城市</div>
                                <ul className="search_ul"  >
                                    {
                                        this.state.hotcity.map((item,index) => {
                                            return <li key={item.cityId} onClick={()=>{
                                                this.handleCity(item.cityId)
                                            }} className={item.cityId===this.state.cityid ? "hotcityli clickli" : "hotcityli" }>{item.cityName}</li>
                                        })
                                    }
                                </ul>
                                <div className="search_T">分类城市</div>    
                                <ul className="search_ul" >
                                    {
                                        this.state.classifycity.map((item,index) => {
                                            return <div>
                                                        <li key={item.firstId} onClick={()=>{
                                                                this.handleUl(item.firstId)
                                                            }} className="classifycityli">
                                                            {item.firstId}
                                                            <span className={that.state.ulid === item.firstId ? "spp" : "sp"}></span>
                                                        </li>
                                                        <ul className={that.state.ulid === item.firstId ? "listul" : " hide "}>
                                                                {
                                                                    item.cityname.map((val,ind) => {
                                                                        return <li key={val.cityId} onClick={()=>{
                                                                            that.handleCity(val.cityId)
                                                                        }} className={val.cityId===that.state.cityid ? "list listli" : "list"}>{val.cityName}</li>
                                                                    })
                                                                }
                                                            </ul>
                                                    </div>
                                        })
                                    }
                                </ul>  
                            </div>
                        )
                    }           
                </section>
            </div>
        )
    }
    componentDidMount(){
        axios.get('/api/hotcity.php').then((res) => {
            this.setState({
                hotcity: res.data.content
            })
        });
        axios.get('/api/classifycity.php').then((res) => {
            this.setState({
                classifycity: res.data
            })
        })
    }
}

export default connect(
    (state) => {
        return {
            // country: this.state.country
        }
    },
    () => {

    }
)(List)