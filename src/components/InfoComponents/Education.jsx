import React from 'react'
import Boxes from '../common/Boxes'

const Education = () => {
  return (
    <Boxes className="border-2 border-gray-600 row-span-1 rounded-md lg:col-span-1 overflow-y-auto lg:row-start-3 lg:row-span-2">
    <div className="m-5">
      <h1 className="text-secondary font-bold font-merriweather text-2xl ">Education</h1>
      <ul className="list-disc pl-5 pt-3 space-y-3">
        <li>
          <h1 className="text-secondary font-bold">SSC</h1>
          <p>Completed my SSC in 2020</p>
          <p className="text-secondary text-sm">Achieved: 67%</p>
        </li>
        <li>
          <h1 className="text-secondary font-bold">HSC</h1>
          <p>Completed my Hsc in 2022</p>
          <p className="text-secondary text-sm">Achieved: 69%</p>
        </li>
        <li>
          <h1 className="text-secondary font-bold">Bachelors in Computer Science</h1>
          <p>Current Pursuing my Bachelors in computer science (hons.) in Artificial Intelligence and Machine Learning</p>
          <p className="text-secondary text-sm">Currently: 9.3 CGPA</p>
        </li>
      </ul>
    </div>
  </Boxes>
  )
}

export default Education
