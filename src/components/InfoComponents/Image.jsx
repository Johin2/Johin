import React from 'react'
import Boxes from '../common/Boxes'
import PortfolioPic from "../../assets/Pic 3.jpg";


const Image = () => {
  return (
    <Boxes className="border-2 border-gray-600 rounded-md md:w-full md:h-full md:row-span-1 md:col-span-1 lg:row-span-2">
    <img src={PortfolioPic} alt="Picture" className="object-cover w-full h-full "/>
    </Boxes>
  )
}

export default Image
