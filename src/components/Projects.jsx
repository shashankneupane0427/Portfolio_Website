import React from 'react'
import Cards from './Cards'
import ccn from '../assets/ccn.png'
import realestate from '../assets/realstate.png'
import eattendance from '../assets/e-attendance.png'
import taskit from '../assets/Taskit.png'
import amazon from '../assets/amazon.png'

const Projects = () => {

  const projectJson = [
    {
      title: 'Climate Care Network',
      desc: 'Climate Care Network (CCN) is the official website of the organization Climate Care Network, dedicated to actively raising awareness about climate change in the modern era.',
      image: ccn,
      live: "https://project-climate-vert.vercel.app/",
      github: "https://github.com/shashankneupane0427/Project-Climate"
    },
    {
      title: 'Ghar Bazar',
      desc: 'A fullstack Real Estate website built with React, Node.js, Express and MongoDB.',
      image: realestate,
      live: "https://ghar-bazar.vercel.app/",
      github: "https://github.com/shashankneupane0427/Ghar-Bazar"
    },
    
    {
      title: 'E-attendance',
      desc: 'A attendance system built with vanilla JavaScript, HTML and CSS.',
      image: eattendance,
      live: "https://e-attendance-hajir.vercel.app/",
      github: "https://github.com/shashankneupane0427/E-Attendance-Website"
    },
    {
      title: 'Amazon Clone',
      desc: 'An E-commerce website built with vanilla JavaScript, HTML and CSS with cart functionality.',
      image: amazon,
      live: "https://amazon-shopping-javascript-project.vercel.app/",
      github: "https://github.com/shashankneupane0427/Ecommerce_Website"
    },
    {
      title: 'Taskit',
      desc: 'A Todo list app built with React and Tailwind CSS with local storage.',
      image: taskit,
      live: "https://taskit-smoky.vercel.app/",
      github: "https://github.com/shashankneupane0427/Taskit"
    },
    ];

  return (
  <section id='projects' className='relative py-10 px-4'>
    <div className='mb-16 max-w-7xl mx-auto'>
    <h2 className='text-3xl font-bold mb-8 text-black border-b border-gray-500 w-max pb-4'>My Projects</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
      {projectJson.map((items)=> {
        return <Cards item={items}/>
      })}
    </div>
    </div>
  </section>
  )
}

export default Projects
