import React from 'react';
import amountClass from './style/AmountHome.less';

export default class AmountHome extends React.Component{

    constructor(props){
    super(props);
   

    this.listAmount = (data) =>{
      var amount_span = [];
      for(var i = 0; i<data.length;i++){
        amount_span.push(<div className={amountClass.amount_home}><span>{data[i].title}</span> <br/>  <span>{data[i].value}</span></div>);
      }
      return amount_span;
    } 
  }

   render(){
    return (
       <div style={{"height":"200px"}}>{this.listAmount(this.props.amount_data)}</div>
      )
   }
}