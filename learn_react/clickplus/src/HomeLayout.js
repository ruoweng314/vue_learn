import React from 'react';
import $ from 'jquery';
import LayoutClass from './style/HomeLayout.less';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import amountClass from './style/AmountHome.less';
export default class homeLayout extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      show_amount : true,
      button_name:'隐藏'
    }

    this.list = (data) =>{
      var amount_span = [];
      for(var i = 0; i<data.length;i++){
        amount_span.push(<div className={amountClass.amount_home}><span>{data[i].title}</span> <br/>  <span>{data[i].value}</span></div>);
      }
      return amount_span;
    }

    this.controlHide = () =>{
        this.state.show_amount = !this.state.show_amount;
        if(this.state.show_amount){
          $("#home_amount_content").show();
          $("#control_amount_button").text("隐藏");
        }else{
           $("#home_amount_content").hide();
          $("#control_amount_button").text("显示");
        }
    }
  }

  render(){ 

    return (
      <div>
        <div className={LayoutClass.layout}>
          <div className={LayoutClass.title}>
            <span className={LayoutClass.title_name}>数据概览</span>
            <DatePicker/>
            <button id="control_amount_button" type="button" className={LayoutClass.controller_button} onClick={this.controlHide} >{this.state.button_name}</button>
          </div>
          <div className={LayoutClass.content} id="home_amount_content">
            <span> {this.props.name} 收到了 </span>
            <div style={{"height":"200px"}}>{this.list(this.props.amount)}</div>
          </div>
        </div>

        <div className={LayoutClass.layout}>
          <div className={LayoutClass.title}>
            <span className={LayoutClass.title_name}>我的页面</span>
          </div>
          <div className={LayoutClass.content}>
            内容
          </div>
        </div>

        <div className={LayoutClass.layout}>
          <div className={LayoutClass.title}>
            <span className={LayoutClass.title_name}>A/B测试</span>
          </div>
          <div className={LayoutClass.content}>
            内容
          </div>
        </div>

        <div className={LayoutClass.layout}>
          <div className={LayoutClass.title}>
            <span className={LayoutClass.title_name}>智能推荐</span>
          </div>
          <div className={LayoutClass.content}>
            内容
          </div>
        </div>

      </div> 
      )
  }
}