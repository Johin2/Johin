import React from 'react'
import Boxes from '../common/Boxes'

const Certifications = () => {
  return (
    <Boxes className="border-2 border-gray-600 max-h-96 md:h-full row-span-1 rounded-md lg:col-span-1 overflow-y-scroll lg:row-start-3 lg:w-full lg:row-span-2">
    <div className="p-4 h-full">
      <h1 className="text-secondary text-2xl font-bold font-merriweather">Certifications</h1>
      <ul className="list-disc p-5 space-y-3">
        <li>
          <h3 className="font-semibold text-secondary">How Google does Machine Learning</h3>
          <p className="text-sm pt-2">Provider: Google(Coursera)</p>
        </li>
        <li>
          <h3 className="text-secondary font-semibold">Azure AI Fundamentals</h3>
          <p>Provider: Microsoft</p>
        </li>
        <li>
          <h3 className="text-secondary font-semibold">Azure Data Fundamentals</h3>
          <p>Provider: Microsoft</p>
        </li>
        <li>
          <h3 className="text-secondary font-semibold">Convolutional Neural networks with Tensorflow</h3>
          <p>Provider: Microsoft</p>
        </li>
        <li>
          <h3 className="text-secondary font-semibold">Introduction to Git and Github</h3>
          <p>Provider: Microsoft</p>
        </li>
      </ul>
    </div>
  </Boxes>
  )
}

export default Certifications
