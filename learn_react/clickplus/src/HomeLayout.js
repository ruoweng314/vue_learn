import React from 'react';
import $ from 'jquery';
import ClickplusModal from './ClickplusModal';
import AmountHome from './AmountHome';
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import FormGroup from 'react-bootstrap/lib/Form';
import Select from 'react-select';
import LineChart from './LineChart';
import PredefinedRanges from './PredefinedRanges';

import LayoutClass from './style/HomeLayout.less';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import amountClass from './style/AmountHome.less';
import "react-select/dist/react-select.css";
export default class HomeLayout extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      show_amount : true,
      button_name:'隐藏',
      page_selected:"One",
      select_list:[
         { value: 'one', label: 'One' },
         { value: 'two', label: 'Two' },
         { value: 'three', label: 'three' },
         { value: 'four', label: 'four' }
      ],
      line_chart_data:{
        color:['#56C1FF','#F3AEA8'],
        x_data:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        series:[
            {
                name:'直接访问',
                type:'bar',
                barWidth: '30%',
                data:[10, 52, 200, 334, 390, 330, 220]
            },{
                name:'间接访问',
                type:'bar',
                barWidth: '20%',
                data:[30, 22, 20, 134, 190, 130, 120]
            }
        ]
      }
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

    this.tableList = (data) =>{
     
      let array_table_body = [];
      for(var i = 0;i<data.length;i++){
        array_table_body.push(<tr><td>{data[i].title}</td><td>{data[i].sex}</td><td>{data[i].age}</td><td>{data[i].email}</td></tr>);
      }
      return array_table_body;
    }

    this.selectChange = (val) =>{
      this.setState(function(state) {
       return {page_selected : val.value}
      });
      console.log("selected:",val.value);
    }

    this.state.tooltip = (
      <Tooltip id="tooltip">tooltip组件，用来实现页面“？”小提示</Tooltip>
    );
  }
  


  render(){ 
    return (
      <div>
        <div className={LayoutClass.layout}>
          <div className={LayoutClass.title}>
            <span className={LayoutClass.title_name}>数据概览</span>
            <PredefinedRanges/>
            <Button bsSize="xsmall" id="control_amount_button" type="button" className={LayoutClass.controller_button} onClick={this.controlHide} >{this.state.button_name}</Button>
          </div>
          <div className={LayoutClass.content} id="home_amount_content">
            <span> {this.props.name} 收到了 </span>
            <AmountHome amount_data={this.props.amount}/>
            <span>该页面主要提供系统中的常用组件使用方法，分步使用npm安装</span>
          </div>
        </div>

        <div className={LayoutClass.layout}>
          <div className={LayoutClass.title}>
            <span className={LayoutClass.title_name}>我的页面</span>
            
            <Select
              className={LayoutClass.select_page}
              name="form-field-name"
              value={this.state.page_selected}
              options={this.state.select_list}
              onChange={this.selectChange}
              clearable={false}
              clearValueText=''
            />
          </div>
          <div className={LayoutClass.content}>
            <ClickplusModal param= {this.props.name}/>

            
          </div>
        </div>

        <div className={LayoutClass.layout}>
          <div className={LayoutClass.title}>
            <span className={LayoutClass.title_name}>A/B测试</span>
          </div>
          <div className={LayoutClass.content}>
            
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>
                    <span className={LayoutClass.pull_left}>名字 </span>
                    <OverlayTrigger placement="top" overlay={this.state.tooltip}>
                      <span className={LayoutClass.c_icon_what}></span>
                    </OverlayTrigger>
                  </th>
                  <th>性别</th>
                  <th>年龄</th>
                  <th>邮箱</th>
                </tr>
              </thead>
              <tbody>{this.tableList(this.props.tablelist)}</tbody>
            </Table>
          </div>
        </div>

        <div className={LayoutClass.layout}>
          <div className={LayoutClass.title}>
            <span className={LayoutClass.title_name}>智能推荐</span>
          </div>
          <div className={LayoutClass.content}>
           <LineChart chartData = {this.state.line_chart_data}/>
          </div>
        </div>

      </div> 
      )
  }
}