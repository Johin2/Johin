import Boxes from "./components/common/Boxes";
import PortfolioPic from "./assets/Pic 3.jpg";
import Css from './assets/css-3-svgrepo-com.svg';
import Javascript from './assets/javascript-svgrepo-com.svg';
import Python from './assets/python-svgrepo-com.svg';
import Html from './assets/html-5-svgrepo-com.svg';
import Mongodb from './assets/mongodb-svgrepo-com.svg';
import Sql from './assets/sql-svgrepo-com.svg';
import PowerBI from './assets/powerbi-svgrepo-com.svg';
import Tableau from './assets/tableau-icon-svgrepo-com.svg';
import Jupyter from './assets/jupyter-svgrepo-com (1).svg';
import TensorFlow from './assets/tensorflow-svgrepo-com.svg';
import react from './assets/react-svgrepo-com.svg';
import Keras from './assets/Keras.svg';
import Ubuntu from './assets/ubuntu-svgrepo-com.svg';
import Vscode from './assets/vscode-svgrepo-com.svg';
import flask from './assets/flask-svgrepo-com.svg';
import Tailwindcss from './assets/tailwindcss-icon-svgrepo-com.svg';
import git from './assets/git-svgrepo-com.svg';
import github from './assets/github-fill-svgrepo-com.svg';
import Flag from './assets/Flag_of_India.svg';
import { ReactLenis } from 'lenis/react';
import { useEffect } from "react";
import gsap from 'gsap';
import { useRef } from "react";
import Timeline from './components/common/Timeline';
import linkedin from './assets/icons8-linkedin-48.svg'
import instagram from './assets/icons8-instagram.svg'

const App = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const update = (time) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

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

  const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

  return (
    <>
      <ReactLenis ref={lenisRef} autoRaf={false} root>
          <div className="custom-scrollbar mt-5 grid grid-rows-4 grid-cols-1 gap-5 mx-5 justify-center md:grid-cols-2 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-3 lg:gap-10 lg:h-screen">
            <Boxes className="border-2 row-start-3 md:row-start-2 md:row-span-1 border-gray-600 bg-secondary rounded-md lg:col-start-3 lg:row-start-1 lg:col-span-2 lg:row-span-2">
              <h1 className="font-merriweather m-5 font-bold text-xl md:text-4xl lg:text-7xl">About me</h1>
              <p className="text-primary font-merriweather text-lg mx-4 md:text-xl md:h-full lg:text-3xl">Hey there, I’m Johin, an AI and software development enthusiast with a passion for solving complex problems. With experience in creating intelligent solutions and optimizing user experiences, I’m here to turn your ideas into reality through innovative technologies. Let’s build something amazing together!</p>
            </Boxes>
            <Boxes className="border-2 border-gray-600 rounded-md">
              <div className="flex flex-col h-full">
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
            <Boxes className="hidden lg:flex lg:flex-col lg:justify-around lg:items-center border-2 border-gray-600 rounded-md row-start-2">
              <div className="flex flex-col justify-center">
                <h1 className="text-secondary font-bold text-2xl">Download Resume</h1>
              </div>
              <a href="./assets/Resume_Johin.pdf" download='Resume_Johin.pdf' className="hover:-translate-y-2">
                <button className="bg-secondaryAccent-light p-2 rounded-sm text-primary font-semibold">
                  Download
                </button>
              </a>
            </Boxes>
            <Boxes className="border-2 border-gray-600 rounded-md md:w-full md:h-full md:row-span-1 md:col-span-1 lg:row-span-2">
              <img src={PortfolioPic} alt="Picture" className="object-cover w-full h-full "/>
            </Boxes>
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
            <Boxes className="border-2 border-gray-600 max-h-96 md:h-full row-span-1 rounded-md lg:row-start-3 lg:col-start-2 lg:col-span-2 lg:row-span-2 overflow-y-scroll">
              <div className="h-full">
                <h1 className="text-secondary text-2xl md:text-4xl font-bold mt-4 ml-4 font-merriweather">Timeline</h1>
                <div className="p-4">
                    <Timeline events={events}/>
                </div>
                
              </div>
            </Boxes>
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
          </div>

          <div className="grid gap-5 mx-5 mt-2 lg:mt-10 md:grid-cols-2 lg:grid-cols-4 lg:h-screen lg:gap-10">
            <Boxes className="bg-secondary border-2 border-gray-600 rounded-md h-full overflow-y-scroll lg:overflow-hidden lg:row-span-1 lg:col-span-2 lg:gap-10">
              <div className="flex flex-col max-h-72">
                <h1 className="text-primaryAccent-light font-bold font-merriweather p-3 text-4xl">Featured Project</h1>
                <ol className="list-decimal pl-5 pr-3 text-primaryAccent-light">
                  <li className="leading-6">
                    <h1 className="font-semibold text-primaryAccent-light">Skin Cancer Detection with CNN</h1>
                    <p className="pt-3">Built a skin cancer detection model using convolutional neural networks (CNNs) to classify melanoma and non-melanoma skin lesions. Integrated the model into a user-friendly GUI, enabling users to upload images and receive real-time predictions.</p>
                    <p className="underline font-semibold"><a href="https://github.com/Johin2/Projects/blob/main/skin-cancer-identification.ipynb">Github</a></p>
                  </li>
                  <li className="mt-5">
                    <h1 className="font-semibold">Book Recommender Website</h1>
                    <p className="pt-2">Developed a book recommendation platform using collaborative filtering techniques, providing personalized book suggestions based on user preferences. This project features a Flask backend and smooth data integration for efficient recommendations.</p>
                    <p className="underline font-semibold"><a href="https://github.com/Johin2/Book-Recommender-Project">Github</a></p>
                  </li>
                </ol>
              </div>
            </Boxes>
            <Boxes className="border-2 border-gray-600 rounded-md overflow-y-scroll lg:col-span-2">
              <div className="text-secondary max-h-72">
                <h1 className="text-4xl font-merriweather p-3">Experience</h1>
                <div className="flex flex-col p-5">
                  <h3 className="font-bold">Software Developer Intern | Augle AI</h3>
                  <p className="font-semibold pt-2">May 2024 – October 2024</p>
                  <p className="pt-5">During my time at Augle AI, I worked on building intelligent AI-based solutions. My most significant contribution was developing a Retrieval-Augmented Generation (RAG) application, which utilized Langchain, PromptLayer, and OpenAI API to create a chatbot capable of answering questions based on product data. This involved scraping over 2,000 product details using Scrapy, cleaning and normalizing the data, and then transforming it to be processed by large language models (LLMs) for accurate responses. I also engineered prompts for optimal chatbot performance and integrated the solution with a React.js frontend for a seamless user experience.</p>
                  <p className="font-semibold py-3">Key Achivements</p>
                  <ul className="list-disc p-3">
                    <li>Successfully scraped and processed 2,000+ product details for chatbot training.</li>
                    <li>Built a chatbot capable of real-time product-related question answering.</li>
                    <li>Optimized prompt responses using OpenAI’s API, enhancing chatbot performance.</li>
                    <li>Collaborated with the frontend team to integrate the AI model into the React.js interface.</li>
                  </ul>
                </div>
                <div className="flex flex-col p-3">
                  <h3 className="font-bold">Data Science Intern | Code Clause</h3>
                  <p className="font-semibold pt-2">August 2023 – September 2023</p>
                  <p className="pt-5">At Code Clause, I focused on machine learning and data science projects that showcased my skills in image processing and model development. One of my key projects was developing a Brain Tumor Detection system using convolutional neural networks (CNNs). This project aimed to identify brain tumors from MRI scans with high accuracy. Additionally, I worked on a Color Detection project that used K-Means clustering for color segmentation. Both projects were deployed using Streamlit, making them accessible as web applications for users to explore.</p>
                  <p className="font-semibold py-3">Key Achivements</p>
                  <ul className="list-disc p-3">
                    <li >Developed a CNN-based brain tumor detection system...</li>
                    <li>Implemented K-Means clustering for precise color detection...</li>
                    <li>Created interactive web applications with Streamlit for end-user interaction...</li>
                  </ul>
                </div>
              </div>
            </Boxes>
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
          </div>

          <div className="grid md:grid-cols-2 md:mt-10 m-5">
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

          </div>
      </ReactLenis>
    </>
  );
};

export default App;