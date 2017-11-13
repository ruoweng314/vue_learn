import React from 'react';
import DatetimeRangePicker from 'react-bootstrap-datetimerangepicker';
import moment from 'moment';
import 'bootstrap-daterangepicker/daterangepicker.css';
import Button from 'react-bootstrap/lib/Button';

export default class PredefinedRanges extends React.Component {

  constructor(props) {
    super(props);

    this.handleEvent = this.handleEvent.bind(this);

    this.state = {
      startDate: moment().subtract(29, 'days'),
      endDate: moment(),
      locale: {
        applyClass: 'btn-green',
        applyLabel: "确定",
        cancelLabel: '取消',
        fromLabel: "开始",
        format: "YYYY-MM-DD",
        toLabel: "到",
        customRangeLabel: '自定义时间',
        daysOfWeek: [ '日', '一', '二', '三', '四', '五', '六' ],
        firstDay: 1,
        monthNames: [ '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月' ]
      },
      ranges: {
        '今天': [moment(), moment()],
        '昨天': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        '过去7天': [moment().subtract(6, 'days'), moment()],
        '过去30天': [moment().subtract(29, 'days'), moment()]
      },
    };
  }

  handleEvent(event, picker) {
    this.setState({
      startDate: picker.startDate,
      endDate: picker.endDate,
    });
  }

  render() {
    let start = this.state.startDate.format('YYYY-MM-DD');
    let end = this.state.endDate.format('YYYY-MM-DD');
    let label = start + ' - ' + end;
    if (start === end) {
      label = start;
    }

    let buttonStyle = { width: '100%',height:'30px' };

    return (
      <div className="form-group" style={{'width':'200px','float':'left','marginBottom':'0'}}>
        <div>
          <DatetimeRangePicker
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            ranges={this.state.ranges}
            onEvent={this.handleEvent}
            locale={this.state.locale}
            maxDate= {moment()}
            minDate = {moment().subtract(90, 'days')}
          >
            <Button className="selected-date-range-btn" style={buttonStyle}>
              <div className="pull-left">
                <i className="fa fa-calendar"/>
                &nbsp;
                <span>
                  {label}
                </span>
              </div>
              <div className="pull-right">
                <i className="fa fa-angle-down"/>
              </div>
            </Button>
          </DatetimeRangePicker>
        </div>
      </div>
    );
  }

}
