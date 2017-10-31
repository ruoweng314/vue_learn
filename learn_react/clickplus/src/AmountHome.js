import React from 'react';
import amountClass from './style/AmountHome.less';

export default class amountHome extends React.component{

   constructor(props) {
    super(props);
    this.state = {
      name:'nihao'
    }
  }
   render(){
    return (
      <div>
        <span>nihao kankan xiaoguo ba </span>
      </div>
      )
   }
}