import React from 'react';

const IAlphaa = (props) => {
     
     const difference = props.sale2022.map((element,index) => element - props.sale2021[index]);
     const profit = difference.filter(element => element > 0 )
     const loss = difference.filter(element => element <= 0 )
  return (
    <>
    <div className="p-4 border-2 rounded border-black w-3/12">
          <div className="mb-8">
               <span className="text-lg font-bold">Net Change</span>
          </div>
          <div className="mb-4 flex justify-between border-t-2 border-black">
               <span className="font-medium"> Total Sale in 2021:  </span>
               <span>{props.sale2021.reduce((a, b) => a+b, 0)}</span>
          </div>
          <div className="mb-4 flex justify-between border-t-2 border-black">
               <span className="font-medium"> Total Sale in 2022: </span>
               <span>{props.sale2022.reduce((a, b) => a+b, 0)}</span>
          </div>
          <div className="mb-4 flex justify-between border-t-2 border-black">
               <span className="font-medium"> Total Profit: </span>
               <span>{profit.reduce((a, b) => a+b, 0)}</span>
          </div>
          <div className="mb-4 flex justify-between border-t-2 border-black">
               <span className="font-medium">Total Loss: </span>
               <span>{loss.reduce((a, b) => a+b, 0)}</span>
          </div>
          <div className="mb-4 flex justify-between border-t-2 border-black">
               <span className="font-medium w-fit">Net: </span>
               <span className="w-fit">{profit.reduce((a, b) => a+b, 0) + loss.reduce((a, b) => a+b, 0)}</span>
          </div>
    </div>
    </>
  )
}

export default IAlphaa