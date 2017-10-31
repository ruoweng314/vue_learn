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
      ]
    }
  }

  render(){
    return (
      <div className={MenuClass.ClickplusContent}>
        <HomeLayout name={this.state.name} amount={this.state.amount}/>
        <div> {this.state.name}</div>
      </div>
      );
  }
}