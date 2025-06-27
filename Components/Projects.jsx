
import React from 'react';
import { projects } from '../ChildComponents/data';
import ProjectsChild from '../ChildComponents/ProjectsChild';
import Header from './Header';

function Projects() {
  return (
    <div className='bg-gray-200 px-4 sm:px-10 md:px-20 py-10'>
      <Header />
      <h2 className='font-mono font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600 text-center text-3xl md:text-4xl mt-8 md:mt-5'>
        Hands-on Projects
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mt-6'>
        {projects.map((item) => (
          <div className="h-full" key={item.name}>
            <ProjectsChild data={item} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Projects;

