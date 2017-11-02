import React from 'react';
import HomeLayout from './HomeLayout';
import MenuClass from './style/ClickplusMenu.less';
export default class HomeClickplus extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      name:'你好这里是父级的值，请在子组件中看看拿到这个值了吗',
      amount:[
        {title:'浏览量',value:100},
        {title:'访客量',value:50},
        {title:'点击量',value:33},
        {title:'访问时长',value:'00:00:59'}
      ],
      table_list:[
        {title:'名字1',sex:"男",age:33,email:"120@clickplus.cn"},
        {title:'名字2',sex:"女",age:33,email:"121@clickplus.cn"},
        {title:'名字3',sex:"男",age:13,email:"122@clickplus.cn"},
        {title:'名字4',sex:"女",age:23,email:"123@clickplus.cn"},
        {title:'名字5',sex:"女",age:23,email:"124@clickplus.cn"},
        {title:'名字6',sex:"女",age:31,email:"125@clickplus.cn"},
        {title:'名字7',sex:"女",age:31,email:"126@clickplus.cn"}
      ]
    }
  }

  render(){
    return (
      <div className={MenuClass.ClickplusContent}>
        <HomeLayout name={this.state.name} amount={this.state.amount} tablelist={this.state.table_list}/>
        <div> {this.state.name}</div>
      </div>
      );
  }
}