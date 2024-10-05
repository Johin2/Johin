import React from 'react'
import Boxes from '../common/Boxes'

const Projects = () => {
  return (
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
  )
}

export default Projects
