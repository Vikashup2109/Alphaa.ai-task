import React, {useState} from 'react';
import { Tab } from '@headlessui/react'
import BarChart from "../utils/BarChart";
import StackedBarChart from "../utils/StackedBarChart"
import PieChart from "../utils/PieChart"
import WaterFallChart from "../utils/WaterfallChart"



const Alphaa = () => {
     function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

let [categories] = useState({
     Waterfall: <WaterFallChart/>,
     Bar: <BarChart/>,
     StackedBar: <StackedBarChart/>,
     Doughnut: <PieChart/>
})
  return (
    <>
    <div className="w-full px-2 py-8">
    <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/90 p-1 mb-8">
               {Object.keys(categories).map((category) => (
                    <Tab className={({ selected }) =>
                         classNames(
                         'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                         'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                         selected
                              ? 'bg-white shadow'
                              : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                         )
                    }>{category}</Tab>
               ))}
          </Tab.List>
          <Tab.Panels>
               <Tab.Panel>
                    <WaterFallChart/>
               </Tab.Panel>
               <Tab.Panel>
                    <BarChart/>
               </Tab.Panel>
               <Tab.Panel>
                    <StackedBarChart />
               </Tab.Panel>
               <Tab.Panel>
                    <PieChart />
               </Tab.Panel>
          </Tab.Panels>
    </Tab.Group>
    </div>
    </>
  )
}

export default Alphaa