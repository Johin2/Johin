import React from 'react'
import Boxes from '../common/Boxes'

const Experience = () => {
  return (
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
  )
}

export default Experience
