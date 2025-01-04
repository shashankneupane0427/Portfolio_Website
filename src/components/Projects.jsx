import React from 'react'
import Portfolio from '../assets/portfolio.png'
import SpicyBites from '../assets/SpicyBites.png'
import Youtube from '../assets/Youtube.png'
import Webelite from '../assets/Webelite.png'
import Supercar from '../assets/Supercar.png'
import Cards from './Cards'


const Projects = () => {

  const projectJson = [
    {
      title: 'Portfolio',
      desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
      image: Portfolio,
      live: "",
      github: ""
    },
    {
      title: 'Spicy Bites',
      desc: 'The team at Webelite Builders exceeded our expectations with their digital marketing expertise. Highly recommend!',
      image: Portfolio,
      live: "",
      github: ""
    },
    {
      title: 'YouTube Clone',
      desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
      image: Portfolio,
      live: "",
      github: ""
    },
    {
      title: 'Webelite builder',
      desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
      image: Portfolio,
      live: "",
      github: ""
    },
    {
      title: 'Super Car',
      desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
      image: Portfolio,
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
