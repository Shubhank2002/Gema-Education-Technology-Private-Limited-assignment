import React from 'react'
import ReportHeader from './ReportHeader'

const OverallScoreCard = ({data}) => {

  if(!data) return <h1>Data not found</h1>
  console.log(data)
  return (
    <div className='w-full flex justify-between font-sans items-center'>
      <div className='flex flex-col gap-4  py-8 px-2 text-[18px] text-gray-600'>
        <h1 className='text-[28px] mb-2 text-left text-black'>{data.name}</h1>
        <h3 className='text-left'>{data.date}</h3>
        <h3 className='text-left'>Link to secure online certificate</h3>
        <ReportHeader/>
        <h3>Note: This link can be e-mailed and shared with others.</h3>
      </div>
      <div><img src="/speechchace logo.png" alt="speechchace" /></div>
    </div>
  )
}

export default OverallScoreCard