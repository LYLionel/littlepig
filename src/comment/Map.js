import React, {Component} from 'react'
import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmap';
class aMap extends Component{ 
    constructor(props){
            super(props)
    }
    componentDidMount () {
        var BMap = window.BMap
        var map = new BMap.Map("allmap"); // 创建Map实例
        var point = new BMap.Point(116.404, 39.915);    
        map.centerAndZoom(point, 15);
        // var myIcon = new BMap.Icon("https://m.xiaozhu.com/images/imp_xzlogo.png",new BMap.Size(44,54),{
        //     anchor: new BMap.Size(10, 25)
        // })
        var marker = new BMap.Marker(point);        // 创建标注    
        map.addOverlay(marker);     
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设    置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
        map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      }
    render(){
        return (
            <div>
            <div
              id='allmap'
              style={{
                width:'100%',
                height:'30vh'
              }} />
        </div>
        )
    }
}

export default aMap