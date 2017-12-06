import React  from 'react'
import '../styles/Search.scss'

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            domestic:true,
            country:false
        }
        this.Tabdomestic = this.Tabdomestic.bind(this)
        this.Tabcountry = this.Tabcountry.bind(this)
        this.gotoList = this.gotoList.bind(this)
      }
    
    Tabdomestic(){
        this.setState({
            domestic: true,
            country : false
        })
        this.props.onCountry('china')
    }
    Tabcountry(){
        this.setState({
            domestic: false,
            country : true
        })
        this.props.onCountry('foreign')
    }
    gotoList() {
        this.props.fun()
    }
    componentDidMount(){
        console.log(this.props.fun)
    }
    render(){
        return (
            <div>
            <div className="Search_tab">
                <div className={this.state.domestic ? 'country_active':''} onClick={this.Tabdomestic} >国内</div>
                <div></div>
                <div className={this.state.country ? 'country_active':''} onClick={this.Tabcountry}>国外</div>
            </div>
            <div className="inputbox">
                    <div className="cityinput" onClick={this.gotoList}>
                        <span>城市或目的地</span>
                        <img src="https://m.xiaozhu.com/v_dcedf/images/right_go.png" alt=""/>
                    </div>
                    <div className="dayinput">
                        <span>入住离开日期</span>
                        <img src="https://m.xiaozhu.com/v_dcedf/images/right_go.png" alt=""/>
                    </div>
                    <div className="btn_search">搜索</div>
                </div>
            </div>
        )
    }
}

export default Search