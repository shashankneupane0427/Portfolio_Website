import React from 'react'
import Cards from './Cards'
import foodie from '../assets/foodie.png'
import realestate from '../assets/realstate.png'


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
      title: 'YouTube Clone',
      desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
      image: '',
      live: "",
      github: ""
    },
    {
      title: 'Webelite builder',
      desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
      image: '',
      live: "",
      github: ""
    },
    {
      title: 'Super Car',
      desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
      image: '',
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
