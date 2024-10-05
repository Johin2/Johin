import React from 'react'
import Boxes from '../common/Boxes'
import github from '../../assets/github-fill-svgrepo-com.svg';
import linkedin from '../../assets/icons8-linkedin-48.svg'
import instagram from '../../assets/icons8-instagram.svg'


const Contacts = () => {
  return (
    <Boxes className="border-2 border-gray-600 rounded-md md:col-span-2 lg:col-span-4 bg-secondary text-primary">
    <div className="flex flex-col md:flex-row justify-around">
      <div className="m-5">
        <h1 className="text-primary font-bold text-2xl lg:text-4xl mb-3">Contact Me</h1>
        <ul className="space-y-3">
          <li>
            <h1 className="font-semibold text-2xl">Phone No.</h1>
            <h3 className="text-xl lg:text-3xl">+91 9653650060</h3>
          </li>
          <li>
            <h1 className="text-2xl font-semibold">Email</h1>
            <p className="text-xl lg:text-3xl">Johinjohny144@gmail.com</p>
          </li>
        </ul>
      </div>
      <div className="ml-5 md:m-5">
        <h1 className="font-bold text-2xl lg:text-4xl mb-3">Social handles</h1>
        <ul className="space-y-3 mb-3 flex flex-col">
          <li><a href="https://github.com/Johin2" className="underline flex items-center lg:text-2xl font-semibold">Github <img src={github} alt="Github" className="size-12"/></a></li>
          <li><a href="https://www.linkedin.com/in/johin/" className="underline flex items-center lg:text-2xl font-semibold">LinkedIn <img src={linkedin} alt="Linkedin logo" /></a></li>
          <li><a href="https://www.instagram.com/johin_714/" className="underline flex items-center lg:text-2xl font-semibold">Instagram <img src={instagram} alt="Instagram" /></a></li>
        </ul>
      </div>
    </div>
  </Boxes>
  )
}

export default Contacts
