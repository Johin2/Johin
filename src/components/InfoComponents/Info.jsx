import React from 'react'
import Boxes from '../common/Boxes'
import Flag from '../../assets/Flag_of_India.svg';

const Info = () => {
    const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

  return (
    <Boxes className="border-2 border-gray-600 rounded-md">
    <div className="flex flex-col h-full relative">
      <div className="flex flex-col p-6 lg:pt-3">
        <span className="text-secondary text-4xl md:text-3xl font-bold">Johin</span> 
        <span className="text-4xl md:text-3xl font-bold">Johny</span>
      </div>

      <div className="self-end inline-flex flex-col justify-end items-start h-full p-4 lg:pt-0 lg:pb-3 lg:pr-6">
        <p className="text-xs">Born in </p>
        <p className="flex md:text-md">Mumbai <img src={Flag} alt="indian flag" className="size-6 ml-2" /></p>
        <p className="md:text-sm">{currentTime} IST</p>
      </div>
    </div>
  </Boxes>
  )
}

export default Info
