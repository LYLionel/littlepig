import React from 'react'

import axios from "axios"

import '../styles/SearchTab.scss'
class SearchTab extends React.Component{
    constructor(props){
        super(props)
    }
    state = {
        data: [],
        datatext: '',
        datafangdong:''
    }
    componentDidMount(){
        axios.get('/api/btnlist.php').then((res)=>{
           this.setState({
                data:res.data,
                datatext:res.data[2].content,
                datafangdong:res.data[2].nickname
           })
        })
    }
    handleImg(index,item){
       var newData = this.state.data
       newData.splice(index,1)
       newData.splice(2,0,item)
       console.log(newData)
       this.setState({
           data:newData,
           datatext: newData[2].content,
           datafangdong:newData[2].nickname
       })
    }

    render(){
        return(
        <div className="SearchTab_box">
            <div className="seachtab_top">
                精华短租日记
            </div>
            <div className="tab_box">
            <div className="img_box">
                {
                    this.state.data.map((item,index) => {
                        return <div onClick={()=>{
                            this.handleImg(index,item)
                        }} key={item.diaryid}><img src={item.headimage} alt=""/></div>
                    })
                }
            </div>
            </div>
            <div className="tab_text">
                 <div>
                    <p>房东 : <span>{this.state.datafangdong}</span></p>
                    <p>{this.state.datatext}</p>
                 </div>
            </div>
        </div>
        )
        
    }
}

export default SearchTab