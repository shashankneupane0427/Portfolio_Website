import React from 'react';

const Education = () => {

    const education = {
        degree: "Bachelor of Science in Computer Science (BSC.CSIT)",
        institution: "Tribhuwan University, Nepal",
        year: "2023 - Present",
        description: "Focused on software engineering, algorithms, and data structures."
    };

    return (
        <div id='education' className='py-10 bg-white relative'>
            <h1 className='text-center text-2xl lg:text-4xl font-bold text-black p-9'>Education</h1>
            <div className='max-w-6xl mx-auto py-10 px-5'>
                <div className='border border-gray-400 rounded-lg flex flex-col p-4'>
                    <h3 className='font-semibold text-black text-lg'>{education.degree}</h3>
                    <p className='text-sm mt-1 text-black'>{education.institution}</p>
                    <p className='text-sm mt-1 text-black'>{education.year}</p>
                    <p className='py-3 text-black'>{education.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Education;
