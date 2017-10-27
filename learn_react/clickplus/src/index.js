import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';
import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import MenuTop from './Menu';


ReactDOM.render(
  <AppContainer>
    <MenuTop />
  </AppContainer>
  , document.getElementById('main'));


import $ from 'jquery';

if(module.hot){
  module.hot.accept();
}