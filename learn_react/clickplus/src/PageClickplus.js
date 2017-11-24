import React from 'react';
import $ from 'jquery';
import MenuClass from './style/CommonMenu-m.css';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import LayoutClass from './style/HomeLayout.less';
import LineChart from './LineChart';
import PieChart from './pieChart';
import PredefinedRanges from './PredefinedRanges';
import Button from 'react-bootstrap/lib/Button';
export default class PageClickplus extends React.Component {
 constructor(props){
    super(props);
    this.state = {
      line_chart_data:{
        title:"标题，传入！",
        color:['#56C1FF','#F3AEA8'],
        x_data:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        series:[
            {
                name:'直接访问',
                type:'bar',
                barWidth: '30%',
                data:[10, 52, 200, 334, 390, 330, 220]
            },{
                name:'间接访问',
                type:'bar',
                barWidth: '20%',
                data:[30, 22, 20, 134, 190, 130, 120]
            }
        ]
      },
      pie_chart_data:{
        legend_data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
        series_data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ]
      }
    }

    this.getCamptest = this.getCamptest.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  getCamptest(){
    // $.ajax({
    //   type:'get',
    //   url:'ajax/getOverviewAmoutReportNew',
    //   data:{"is_delete":1,"start_time":"2017-11-14","end_time":"2017-11-14"},
    //   dataType:'json',
    //   success:function(data){
    //     console.log(data);
    //   }
    // })

    fetch('ajax/getOverviewAmoutReportNew?is_delete=1&start_time=2017-11-14&end_time=2017-11-14',{method:'GET'})
      .then((response) => response.json()) //下一步操作
      .then((responseData) => {
      console.log(responseData); //打印出来
      // alert(responseData);
      });
   }

  handleSelect(key) {
    console.log(`selected ${key}`);
   // this.setState({ key });
  }

  render(){
    return (
      <div className={MenuClass.ClickplusContent}>
        <Tabs defaultActiveKey={1} onSelect={this.handleSelect} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="数据报表">
            <div className={LayoutClass.layout} style={{width:'59%',float:'left'}}>
              <div className={LayoutClass.title}>
                <span className={LayoutClass.title_name}>今日实时数据</span>
              </div>
              <div className={LayoutClass.content} id="home_amount_content">
                 <LineChart chartData = {this.state.line_chart_data}/>
              </div>
            </div> 
            <div className={LayoutClass.layout} style={{width:'40%',float:'right'}}>
              <div className={LayoutClass.title}>
                <span className={LayoutClass.title_name}>数据占比</span>
              </div>
              <div className={LayoutClass.content} id="home_amount_content">
                <PieChart chartData = {this.state.pie_chart_data}/>
              </div>
            </div>
          </Tab>
          <Tab eventKey={2} title="组件点击图">
            <Button bsStyle="primary" bsSize="small" onClick={this.getCamptest}>ajax请求事件</Button>
          </Tab>
          <Tab eventKey={3} title="热图分析">
            <PredefinedRanges />
          </Tab>
        </Tabs>
      </div>
      );
  }
}