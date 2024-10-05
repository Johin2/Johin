import React from 'react'
import Boxes from '../common/Boxes'

const Aboutme = () => {
  return (
    <Boxes id="about-me-container" className="border-2 row-start-3 md:row-start-2 md:row-span-1 border-gray-600 bg-secondary rounded-md lg:col-start-3 lg:row-start-1 lg:col-span-2 lg:row-span-2">
    <h1 className="font-merriweather m-5 font-bold text-xl md:text-4xl lg:text-7xl" >About me</h1>
    <p className="text-primary font-merriweather text-lg mx-4 md:text-xl md:h-full lg:text-3xl">Hey there, I’m Johin, an AI and software development enthusiast with a passion for solving complex problems. With experience in creating intelligent solutions and optimizing user experiences, I’m here to turn your ideas into reality through innovative technologies. Let’s build something amazing together!</p>
  </Boxes>
  )
}

export default Aboutme
