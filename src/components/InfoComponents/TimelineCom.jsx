import React from 'react'
import Boxes from '../common/Boxes'
import Timeline from '../common/Timeline'

const TimelineCom = () => {
    const events = [
        {
          title: 'Started Learning Python',
          description: 'Began learning the fundamentals of Python in September 2021.',
          date: 'September 2021',
        },
        {
          title: 'Started Machine Learning',
          description: "Began Learning the fundamentals of Machine Learning in January 2022",
          date: 'January 2022',
        },
        {
          title: 'Started Deep Learning',
          description: "Began Learning the fundamentals of Deep Learning, a subset of Machine Learning, in July 2023",
          date: 'July 2023',
        },
        {
          title: "First Internship",
          description: "Got my first internship from Code Clause",
          date: "August 2023"
        },
        {
          title: 'Completed First Project',
          description: 'Built my first Deep Learning Project: A Tkinter-based Skin cancer detection in August 2023.',
          date: 'November 2023',
        },
        {
          title: 'Started Learning Javascript',
          description: 'Started learning Javascript, in March 2024',
          date: 'February 2024',
        },
        {
          title: "Second Internship",
          description: "Got my second internship from Augle AI",
          date: "March 2024"
        },
        {
          title: 'Started Learning React.Js',
          description: 'Started learning React.Js, in July 2024',
          date: 'July 2024',
        },
        {
          title: 'Created Portfolio',
          description: 'Created my personalized portfolio using React.js and Tailwindcss, in September 2024',
          date: 'SeptembeR 2024',
        },
      ];
  return (
    <Boxes className="border-2 border-gray-600 max-h-96 md:h-full row-span-1 rounded-md lg:row-start-3 lg:col-start-2 lg:col-span-2 lg:row-span-2 overflow-y-scroll">
    <div className="h-full">
      <h1 className="text-secondary text-2xl md:text-4xl font-bold mt-4 ml-4 font-merriweather">Timeline</h1>
      <div className="p-4">
          <Timeline events={events}/>
      </div>
      
    </div>
  </Boxes>
  )
}

export default TimelineCom
