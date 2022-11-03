import React from 'react'
import ReactEchart from "echarts-for-react";
import useGraphDataFetcher from '../utils/hooks';
import IAlphaa from '../components/IAlphaa'


const PieChart = () => {
     const {data} = useGraphDataFetcher();
     const subcategory = data.data.map(a => a.subcategory)
     const d__2021sale = data.data.map(a => a.d__2021sale)
     const d__2022sale = data.data.map(a => a.d__2022sale)
     console.log(subcategory);
     const profit = d__2022sale.map((value, index) => value-d__2021sale[index]);
     let eChartsOptionData = [];
     let eChartsOptionData2 = [];
     let eChartsOptionData3 = [];
     for(let i=0; i<profit.length; i++) eChartsOptionData = [...eChartsOptionData, {name: subcategory[i], value: profit[i]}];
     for(let i=0; i<d__2021sale.length; i++) eChartsOptionData2 = [...eChartsOptionData2, {name: subcategory[i], value: d__2021sale[i]}];
     for(let i=0; i<d__2022sale.length; i++) eChartsOptionData3 = [...eChartsOptionData3, {name: subcategory[i], value: d__2022sale[i]}];
     const eChartsOption = {
          title: {
               text: 'Profit Chart',
               subtext: 'Increasing Profit numbers',
               left: 'left'
          },
          tooltip: {
               trigger: 'item',
               formatter: '{a} <br/>{b} : {c}'
          },
          legend: {
               left: 'center',
               top: 'right',
               data: profit
          },
          toolbox: {
               show: true,
               feature: {
                    saveAsImage: { show: true }
               }
          },
          series: [
               {
                    name: '2021 Data',
                    type: 'pie',
                    radius: [15, 140],
                    center: ['40%', '70%'],
                    roseType: 'area',
                    itemStyle: {
                         borderRadius: 5
                         },
                    data: [
                        ...eChartsOptionData
                    ].sort(function (a, b) {
                         return a.value - b.value;
                    }),
               }
          ]
     }
     const eChartsOption2 = {
          title: {
               text: 'Sale 2021 Chart',
               subtext: 'Increasing sale numbers',
               left: 'left'
          },
          tooltip: {
               trigger: 'item',
               formatter: '{a} <br/>{b} : {c}'
          },
          legend: {
               left: 'center',
               top: 'right',
               data: d__2021sale
          },
          toolbox: {
               show: true,
               feature: {
                    saveAsImage: { show: true }
               }
          },
          series: [
               {
                    name: '2021 Data',
                    type: 'pie',
                    radius: [15, 140],
                    center: ['50%', '60%'],
                    roseType: 'area',
                    itemStyle: {
                         borderRadius: 5
                         },
                    data: [
                        ...eChartsOptionData2
                    ].sort(function (a, b) {
                         return a.value - b.value;
                    }),
               }
          ]
     }
     const eChartsOption3 = {
          title: {
               text: 'Sale 2022 Chart',
               subtext: 'Increasing sale numbers',
               left: 'left'
          },
          tooltip: {
               trigger: 'item',
               formatter: '{a} <br/>{b} : {c}'
          },
          legend: {
               left: 'center',
               top: 'right',
               data: subcategory
          },
          toolbox: {
               show: true,
               feature: {
                    saveAsImage: { show: true }
               }
          },
          series: [
               {
                    name: '2021 Data',
                    type: 'pie',
                    radius: [15, 150],
                    center: ['40%', '60%'],
                    roseType: 'area',
                    itemStyle: {
                         borderRadius: 5
                         },
                    data: [
                        ...eChartsOptionData3
                    ].sort(function (a, b) {
                         return a.value - b.value;
                    }),
               }
          ]
     }

  return (
  <>
  <div className="">
          <div className="my-8 min-h-max flex">
               <ReactEchart option={eChartsOption} className="w-8/12"/>
               <IAlphaa sale2021={d__2021sale} sale2022={d__2022sale}/>
          </div>
          <div className="my-8 flex">
               <ReactEchart option={eChartsOption2} className="w-8/12"/>
               <IAlphaa sale2021={d__2021sale} sale2022={d__2022sale}/>
          </div>
          <div className="my-8 flex">
               <ReactEchart option={eChartsOption3} className="w-8/12" />
               <IAlphaa sale2021={d__2021sale} sale2022={d__2022sale}/>
          </div>
  </div>
          </>
  )
}

export default PieChart