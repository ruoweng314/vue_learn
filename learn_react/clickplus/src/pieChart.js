import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts'
export default class PieChart extends React.Component{

  constructor(props){
    super(props);
    this.getOption = () => {
    const option ={
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:this.props.chartData.legend_data
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:this.props.chartData.series_data
                }
            ]
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