import React from 'react';
// import css from "./BarChart.module.css"
import ReactEchart from "echarts-for-react";
import IAlphaa from '../components/IAlphaa'
import useGraphDataFetcher from '../utils/hooks';


const BarChart = (props) => {
     const {data} = useGraphDataFetcher();
     const subcategory = data.data.map(a => a.subcategory)
     const d__2021sale = data.data.map(a => a.d__2021sale)
     const d__2022sale = data.data.map(a => a.d__2022sale)
     // console.log({data});
     const eChartsOption = {
          title: {text: "Bar Chart"},
          xAxis: {
               type: "category",
               data: subcategory
          },
          yAxis: {
               type: "value"
          },
          tooltip: {},
          toolbox: {
               feature: {
                    saveAsImage: {}
               }
          },
          legend: {},
          series: [
               {
               data: d__2021sale.sort(function (a, b) {
                         return a - b;
                    }),
               type: 'bar'
               },
               {
               data: d__2022sale.sort(function (a, b) {
                         return a - b;
                    }),
               type: 'bar'
               },
               
          ]
     };
  return (
          <div className="flex mt-10">
               <ReactEchart option={eChartsOption} className="w-8/12 h-8/12"/>
               <IAlphaa sale2021={d__2021sale} sale2022={d__2022sale}/>
          </div>
  )
}

export default BarChart