import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts'
export default class LineChart extends React.Component{

  constructor(props){
    super(props);
    this.getOption = () => {
    const option ={
        title:{ text: '数据值从组件外部导入',
                x: 'center',
                align: 'center'
        },
        color: this.props.chartData.color,
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : this.props.chartData.x_data,
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : this.props.chartData.series
    }
    
    return option;
  }
        
  }

  render(){
    return(
      <ReactEcharts
        option = {this.getOption()}
         notMerge={true}
        lazyUpdate={true}
        theme={"theme_name"}
      />
      )
  }

}