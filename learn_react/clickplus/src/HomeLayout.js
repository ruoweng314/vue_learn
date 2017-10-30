import React from 'react';
import LayoutClass from './style/HomeLayout.less';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
export default class homeLayout extends React.Component{
  render(){
    return (
      <div>
        <div className={LayoutClass.layout}>
          <div className={LayoutClass.title}>
            <span className={LayoutClass.title_name}>数据概览</span>
            <DatePicker/>
          </div>
          <div className={LayoutClass.content}>
            内容
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