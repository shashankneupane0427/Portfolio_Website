import React, { useRef } from 'react';
import linkedin from '../assets/linkedin.png';
import Lottie from 'lottie-react';
import contact from '../assets/Contact.json';
import github from '../assets/github.png';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_id', 'template_id', form.current, 'user_id')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
      });
  };

  return (
    <section id='contact' className='z-50 bg-slate-100 relative py-10 px-5 md:px-0'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='md:w-1/2 mb-8 ml-2 md:mb-0'>
              <h2 className='text-3xl font-bold mb-3 text-gray-900'>Get in Touch</h2>
              <p className='mb-4 text-gray'>I'm always open to new opportunities and collaboration. Feel free to reach out!</p>
              <div className='flex space-x-4'>
                <a href="#" className='text-foreground/60 hover:text-foreground/80'>
                <img src={linkedin} alt="" className='h-6 w-6'/></a>
                <a href="#" className='text-foreground/60 hover:text-foreground/80'>
                <img src={github} alt="" className='h-6 w-6'/></a>
              </div>
                <Lottie animationData={contact} className='w-[350px] mx-auto lg:w-[500px]'/>
            </div>
            <form ref={form} onSubmit={sendEmail} className='w-full md:w-1/2 bg-gray-100 rounded-lg border border-gray-300 shadow-lg shadow-gray-500 p-10'> 
              <h1 className='text-gray-900 text-4xl font-bold mb-7'>Contact Me</h1>
              <div className='mb-4'>
                <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
                <input type="text" id='name' name='name' placeholder='Full Name'  className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'/>
              </div>
              <div className='mb-4'>
                <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
                <input type="email" id='email' name='email' placeholder='Email'  className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'/>
              </div>
              <div className='mb-4'>
                <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Message</label>
                <textarea id='message' name='message' placeholder='Enter Your Message' className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'/>
              </div>
              <button type='submit' className='bg-gray-500 text-white px-3 py-2 rounded-lg'>Send Message</button>
            </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;
