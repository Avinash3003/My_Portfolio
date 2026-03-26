import React from 'react';
import { projects } from '../ChildComponents/data';
import ProjectsChild from '../ChildComponents/ProjectsChild';
import Header from './Header';

function Projects() {
  return (
    <div className='bg-slate-50 min-h-screen flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 pt-6 pb-24 w-full overflow-y-scroll overflow-x-hidden box-border'>
      <Header />
      
      <div className='w-full max-w-7xl mx-auto mt-10 md:mt-16'>
        <h1 className='text-3xl md:text-5xl font-black text-center text-slate-800 mb-12 md:mb-20 tracking-wide drop-shadow-sm'>
          Featured <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600'>Projects</span>
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12'>
          {projects.map((item) => (
            <ProjectsChild key={item.name} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
