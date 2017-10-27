import React from 'react';
import DatePicker from './DatePicker';
import MenuClass from './style/CommonMenu-m.css';
export default class HomeClickplus extends React.Component {
 
  render(){
    return (
      <div className={MenuClass.ClickplusContent}>
        <p>这里是首页</p>
        <DatePicker />
      </div>
      );
  }
}