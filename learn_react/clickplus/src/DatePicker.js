import React from 'react';
import DatePicker from 'react-datepicker/dist/react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import moment from 'moment';

export default class datePicker extends React.Component{
   constructor (props) {
    super(props)
    this.state = {
      startDate: moment().subtract(1, "days"),
      endDate:moment().subtract(90, "days")
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }
 
  handleChangeStart(date) {
    this.setState({
      startDate: date
    });
  }
  handleChangeEnd(date) {
    this.setState({
      endDate: date
    });
  }
 
  render() {
    return (
        <div>
          <span>时间范围:</span>
          <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChangeStart}
              dateFormat='YYYY-MM-DD'
              selectsStart
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              minDate={moment().subtract(90, "days")}
              maxDate={moment().subtract(1, "days")}
              placeholderText="开始时间"
          />
          ——
          <DatePicker
              selected={this.state.endDate}
              onChange={this.handleChangeEnd}
              dateFormat='YYYY-MM-DD'
              selectsEnd
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              minDate={moment().subtract(90, "days")}
              maxDate={moment().subtract(1, "days")}
              placeholderText="结束时间"
          />
        </div>

      )

    
  }
}