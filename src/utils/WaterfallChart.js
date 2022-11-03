import IAlphaa from '../components/IAlphaa'
import React from 'react';
import ReactEchart from "echarts-for-react";
import useGraphDataFetcher from '../utils/hooks';

const WaterfallChart = () => {
     const {data} = useGraphDataFetcher();
     const subcategory = data.data.map(a => a.subcategory)
     const d__2021sale = data.data.map(a => a.d__2021sale)
     const d__2022sale = data.data.map(a => a.d__2022sale)
     const diff = d__2022sale.map((a, b) => a - d__2021sale[b])
     const difference = diff.sort(function (a, b) {
                         return b - a;
                    });
     console.log(difference)
     var help = [];
     var profit = [];
var loss = [];
for (var i = 0, sum = 0; i < difference.length; i++) {
  if (difference[i] >= 0) {
    profit.push(difference[i]);
    loss.push('-');
  } else {
    profit.push('-');
    loss.push(-difference[i]);
  }

  if (i === 0) {
    help.push(0);
  } else {
    sum += difference[i - 1];
    if (difference[i] < 0) {
      help.push(sum + difference[i]);
    } else {
      help.push(sum);
    }
  }
}

     const eChartsOption = {
          title: {
               text: 'Waterfall'
          },
          grid: {
               left: '3%',
               right: '4%',
               bottom: '3%',
               containLabel: true
          },
          xAxis: {
               type: 'category',
               splitLine: { show: false },
               data: subcategory
          },
          yAxis: {
               type: 'value'
          },
          tooltip: {},
          series: [
          {
               type: 'bar',
               stack: 'all',
               itemStyle: {
                    normal: {
                         barBorderColor: 'rgba(0,0,0,0)',
                         color: 'rgba(0,0,0,0)'
                    },
                    emphasis: {
                         barBorderColor: 'rgba(0,0,0,0)',
                         color: 'rgba(0,0,0,0)'
                    }    
               },
               data: help
          },
          {
               name: 'Profit',
               type: 'bar',
               stack: 'all',
               data: profit
          },
          {
               name: 'Loss',
               type: 'bar',
               stack: 'all',
               data: loss,
               itemStyle: {
                    color: '#f33'
               }
          }
          ]
     }
  return (
    <div className="flex mt-10">
               <ReactEchart option={eChartsOption} className="w-8/12 h-8/12"/>
               <IAlphaa sale2021={d__2021sale} sale2022={d__2022sale}/>
          </div>
  )
}

export default WaterfallChart