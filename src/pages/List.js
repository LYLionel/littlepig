import React, {Component} from 'react'
import axios from 'axios'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../styles/List.scss'
class Index extends Component{
    constructor(props){
        super(props)
        this.state = {
            hotcity: [],
            classifycity: [],
            cityid: null,
            ulid: null
        }
        this.onChangeIpt = this.onChangeIpt.bind(this)
    }
    onChangeIpt(e){
        console.log(e.target.value)
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
    render(){
        console.log(ReactCSSTransitionGroup)
        var that = this
        return (
            <div>
                <div className="head">
                    <span></span>
                    <div className="tittle">城市或目的地</div>
                </div>
                <div className="search_on">
                    <input type="text" onChange={this.onChangeIpt} className="search_input" id="tb-city" placeholder="请输入城市或目的地"/>
                </div>
                <section id="search_box">
                    <ul className="search_in" style={{background:'red',height:'10px'}}></ul>
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
                                            <li key="item.firstId"onClick={()=>{
                                                    this.handleUl(item.firstId)
                                                }} className="classifycityli">
                                                {item.firstId}
                                                <span className={that.state.ulid === item.firstId ? "spp" : "sp"}></span>
                                            </li>
                                            {/* <ReactCSSTransitionGroup
                                                transitionName="example"
                                                transitionAppear={true}
                                                transitionAppearTimeout={500}
                                                transitionEnter={true}
                                                transitionLeave={true}>
                                                <h1>Fading at Initial Mount</h1>
                                            </ReactCSSTransitionGroup> */}
                                            <ul className={that.state.ulid === item.firstId ? "show listul" : "hide"}>
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
                </section>
            </div>
        )
    }
    componentDidMount(){
        axios.get('/api/classifycity.php').then((res) => {
            this.setState({
                classifycity: res.data
            })
        })
        axios.get('/api/hotcity.php').then((res) => {
            this.setState({
                hotcity: res.data.content
            })
        });
    }
}

export default Index