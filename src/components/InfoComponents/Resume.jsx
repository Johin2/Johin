import React from 'react'
import Boxes from '../common/Boxes'


const Resume = () => {
  return (
    <Boxes className="hidden lg:flex lg:flex-col lg:justify-around lg:items-center border-2 border-gray-600 rounded-md row-start-2">
    <div className="flex flex-col justify-center">
    <h1 className="text-secondary font-bold text-2xl">Download Resume</h1>
    </div>
    <a href="../../assets/Resume_Johin.pdf" download='Resume_Johin.pdf' className="hover:-translate-y-2">
    <button className="bg-secondaryAccent-light p-2 rounded-sm text-primary font-semibold">
        Download
    </button>
    </a>
    </Boxes>
  )
}

export default Resume
