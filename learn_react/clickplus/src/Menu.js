import React from 'react';
import { DatePicker } from 'antd';
import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import HomeClickplus  from './HomeClickplus';
import PageClickplus  from './PageClickplus';
import DataClickplus  from './DataClickplus';
import MenuClass from './style/CommonMenu-m.css';

export default class MenuTop extends React.Component{
  render(){
    return (
        <Router>
          <div>
            <div  className={MenuClass.clickplusTop}>
            <ul>
              <li><Link to="/">首页</Link></li>
              <li><Link to="/pageList">页面管理</Link></li>
              <li><Link to="/dataList">数据运营</Link></li>
            </ul>
            </div>
            <Route exact path="/" component={HomeClickplus}/>
            <Route path="/pageList"  component={PageClickplus}/>
            <Route path="/dataList" component={DataClickplus}/>
          </div>
        </Router>
      );
  }
}