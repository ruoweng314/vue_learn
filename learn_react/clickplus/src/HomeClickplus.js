import React from 'react';
import HomeLayout from './HomeLayout'
import MenuClass from './style/ClickplusMenu.less';
export default class HomeClickplus extends React.Component {
  render(){
    return (
      <div className={MenuClass.ClickplusContent}>
        <HomeLayout />
      </div>
      );
  }
}