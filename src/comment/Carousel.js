import React  from 'react'

import { Carousel, WingBlank } from 'antd-mobile'

import '../styles/Carousel.css'

import axios from "axios"

class carousel extends React.Component {
  constructor(props){
    super(props)
    this.itemindexChange = this.itemindexChange.bind(this)
  }
  state = {
    data: [],
    initialHeight: 176,
    itemindex:1
  }
  itemindexChange(from,to){
    this.setState({
      itemindex:to
    })
  }
  componentDidMount() {
    axios.get('/api/list.php').then((res)=>{
      this.setState({
        data: res.data
      });
    })
    // simulate img loading
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          className="my-carousel"
          autoplay={false}
          dots
          dotActiveStyle={{
            width:'8px',
            height:'8px'
          }}
          infinite
          selectedIndex={1}
          swipeSpeed={35}
          beforeChange={this.itemindexChange}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map((item) => (
            <a href="http://www.baidu.com" key={item.luid} >
              <img
                src={item.mainimageh5url}
                alt=""
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({
                    initialHeight: null,
                  });
                }}
              />
            </a>
          ))}
        </Carousel>
        <div className="banner_text">
          {this.state.data.map((item,index)=>{
           return index === this.state.itemindex ?  <p key="98762">{item.h5desc} <span>&yen;{item.price}/晚</span></p> : null           
          })}
        </div>
      </WingBlank>
    );
  }
}

export default carousel