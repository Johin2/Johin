import React from 'react'
import Boxes from '../common/Boxes'
import Css from '../../assets/css-3-svgrepo-com.svg';
import Javascript from '../../assets/javascript-svgrepo-com.svg';
import Python from '../../assets/python-svgrepo-com.svg';
import Html from '../../assets/html-5-svgrepo-com.svg';
import Mongodb from '../../assets/mongodb-svgrepo-com.svg';
import Sql from '../../assets/sql-svgrepo-com.svg';
import PowerBI from '../../assets/powerbi-svgrepo-com.svg';
import Tableau from '../../assets/tableau-icon-svgrepo-com.svg';
import Jupyter from '../../assets/jupyter-svgrepo-com (1).svg';
import TensorFlow from '../../assets/tensorflow-svgrepo-com.svg';
import react from '../../assets/react-svgrepo-com.svg';
import Keras from '../../assets/Keras.svg';
import Ubuntu from '../../assets/ubuntu-svgrepo-com.svg';
import Vscode from '../../assets/vscode-svgrepo-com.svg';
import flask from '../../assets/flask-svgrepo-com.svg';
import Tailwindcss from '../../assets/tailwindcss-icon-svgrepo-com.svg';
import git from '../../assets/git-svgrepo-com.svg';
import github from '../../assets/github-fill-svgrepo-com.svg';


const Skills = () => {
    const skills = [
        {
          icon: Css,
          name: "css",
          info: "CSS 3"
        },
        {
          icon: Python,
          name: "python",
          info: "Python"
        },
        {
          icon: Html,
          name: "html",
          info: "HTML 5"
        },
        {
          icon: Javascript,
          name: "javascript",
          info: "Javascript"
        },
        {
          icon: Mongodb,
          name: "mongodb",
          info: "MongoDb"
        },
        {
          icon: Keras,
          name: "keras",
          info: "Keras"
        },
        {
          icon: TensorFlow,
          name: "tensorflow",
          info: "Tensorflow"
        },
        {
          icon: Sql,
          name: "sql",
          info: "SQL Databases"
        },
        {
          icon: Vscode,
          name: "vscode",
          info: "Vscode"
        },
        {
          icon: Ubuntu,
          name: "ubuntu",
          info: "Ubuntu"
        },
        {
          icon: Jupyter,
          name: "jupyter",
          info: "Jupyter"
        },
        {
          icon: Tailwindcss,
          name: "tailwindcss",
          info: "Tailwindcss"
        },
        {
          icon: flask,
          name: "flask",
          info: "Flask"
        },
        {
          icon: PowerBI,
          name: "powerbi",
          info: "Power Bi"
        },
        {
          icon: react,
          name: "react",
          info: "React.js"
        },
        {
          icon: Tableau,
          name: "tableau",
          info: "Tableau"
        },
        {
          icon: git,
          name: "git",
          info: "Git"
        },
        {
          icon: github,
          name: "github",
          info: "Github"
        },
      ];
  return (
    <Boxes className="border-2 border-gray-600 rounded-md md:col-span-2 lg:col-span-4 lg:flex lg:w-full lg:h-full lg:flex-col overflow-y-scroll lg:overflow-hidden">
    <h1 className="font-bold text-3xl ml-6">Skills</h1>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full items-center justify-center p-2 lg:gap-2 lg:grid-cols-7">
      {skills.map((skill, index) => (
        <div key={index} className="col-span-1 row-span-1 border-2 rounded-md flex hover:translate-y-1 hover:translate-x-1">
          <img src={skill.icon} alt={skill.name} className="bg-white size-10 p-1"/>
          <div className="h-auto w-full flex items-center">
            <h1 className="text-white text-sm pl-1">{skill.info}</h1>
          </div>
          
        </div>
      ))}
    </div> 
</Boxes>

  )
}

export default Skills
