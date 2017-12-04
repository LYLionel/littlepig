import React, {Component} from 'react'
import '../styles/Shopdetail.scss'
import Map from './Map'
class Shopdetail extends Component{
    render(){
        return (
            <div id="detail_main">
               <p className="detail_p1">Nomad’s 广州骑楼民宿- Studio</p>
               <div className="icon_div">
                 <div ckass="icon_box">
                    <div>
                        <img src="https://m.xiaozhu.com/v_dcedf/images/x_icon_yp.png" alt=""/>
                        优品
                    </div>
                    <div>
                        <img src="https://m.xiaozhu.com/v_dcedf/images/ico_mianya.png" alt=""/>
                        免押金
                    </div>
                    <div>
                        <img src="https://m.xiaozhu.com/v_dcedf/images/ico_shipai.png" alt=""/>
                        实拍
                    </div>
                    <div>
                        <img src="https://m.xiaozhu.com/v_dcedf/images/ico_yanzhen.png" alt=""/>
                        验真
                    </div>
                    <div>
                        <img src="https://m.xiaozhu.com/v_dcedf/images/x_icon_dp.png" alt=""/>
                        1条点评
                    </div>
                 </div>
                   
               </div>
               <div className="userbox">
                   <img src="//image.xiaozhustatic1.com/roundcrop/0/00,154,154,1,80,1/8,0,57,9920,363,364,9bc88b8a.jpg" alt=""/>
               </div>
                <p className="username">鸭血<br/><span>实名认证</span></p>
               <div className="touch_landlay">
                   <div>联系房东</div>
               </div>
               <div className="Comment">
                   <h3>19条点评</h3>
                   <h4>
                       5/<span>5分</span>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                   </h4>
                   <h4>郭界 2017年12月入住</h4>
                   <p>隐匿于山林之间，温暖而不失优雅……忘却我们的身份重归于内心。愿我们的爱情能打破流言蜚语和这间小窝一样，真实真心，真爱……愿每一个来这里的人归于一份宁静……</p>
               </div>
               <Map/>
            </div>
        )
    }
}

export default Shopdetail