import React from 'react'
import Cards from './Cards'
import foodie from '../assets/foodie.png'
import realestate from '../assets/realstate.png'
import eattendance from '../assets/e-attendance.png'
import taskit from '../assets/Taskit.png'
import amazon from '../assets/amazon.png'

const Projects = () => {

  const projectJson = [
    {
      title: 'Ghar Bazar',
      desc: 'A fullstack Real Estate website built with React, Node.js, Express and MongoDB.',
      image: realestate,
      live: "",
      github: ""
    },
    {
      title: 'Foodie',
      desc: 'A Food Odering website landing page built with React and Tailwind CSS.',
      image: foodie,
      live: "",
      github: ""
    },
    {
      title: 'E-attendance',
      desc: 'A attendance system built with vanilla JavaScript, HTML and CSS.',
      image: eattendance,
      live: "",
      github: ""
    },
    {
      title: 'Amazon Clone',
      desc: 'An E-commerce website built with vanilla JavaScript, HTML and CSS with cart functionality.',
      image: amazon,
      live: "",
      github: ""
    },
    {
      title: 'Taskit',
      desc: 'A Todo list app built with React and Tailwind CSS with local storage.',
      image: taskit,
      live: "",
      github: ""
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
