import React from 'react';
import ReactEchart from "echarts-for-react";
import useGraphDataFetcher from '../utils/hooks';
import IAlphaa from '../components/IAlphaa'



const BarChart = () => {
     const {data} = useGraphDataFetcher();
     const subcategory = data.data.map(a => a.subcategory)
     const d__2021sale = data.data.map(a => a.d__2021sale)
     const d__2022sale = data.data.map(a => a.d__2022sale)
     const profit = d__2022sale.map((a, b) => a - d__2021sale[b])
     const eChartsOption = {
          title: {text: "Stacked Bar Chart"},
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
               data: d__2021sale,
               type: 'bar',
               stack: 'total'
               },
               {
               data: profit,
               type: 'bar',
               stack: 'total'

               }
          ]
     };
  return (
    <div className="flex mt-10">
               <ReactEchart option={eChartsOption}  className="w-8/12 h-8/12"/>
               <IAlphaa sale2021={d__2021sale} sale2022={d__2022sale}/>
          </div>
  )
}

export default BarChart