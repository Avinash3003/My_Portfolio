import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

function ProjectsChild({ data }) {
  return (
    <div className='flex flex-col h-full bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_40px_rgb(79,70,229,0.12)] hover:border-indigo-100 hover:-translate-y-2 transition-all duration-500 overflow-hidden group'>
      
      {/* Dynamic Image Header */}
      <div className='w-full h-56 md:h-64 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10'></div>
        <img
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out'
          src={`project_images/${data.img_name}.png`}
          alt={data.name}
        />
      </div>

      {/* Content Container */}
      <div className='flex flex-col flex-1 p-6 md:p-8 relative'>
        
        {/* Animated Hover Gradient Strike */}
        <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-20'></div>

        <h3 className='text-2xl font-black text-slate-800 mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-colors duration-300'>
          {data.name}
        </h3>
        
        <p className='text-slate-600 text-sm md:text-base leading-relaxed mb-6 flex-1'>
          {data.describe}
        </p>

        {/* Skill Tags Layer */}
        <div className='flex flex-wrap gap-2 mb-8'>
          {data.skills_used.map((item, index) => (
            <span
              key={index}
              className='px-3 py-1 bg-slate-50 border border-slate-200 text-slate-500 font-bold uppercase tracking-wider rounded-lg text-[0.65rem] shadow-sm'
            >
              {item}
            </span>
          ))}
        </div>

        {/* Professional Button Footers */}
        <div className='flex flex-wrap items-center gap-3 pt-5 border-t border-slate-100 mt-auto'>
          {data.live_link && (
            <a 
              href={data.live_link} 
              target='_blank' 
              rel='noreferrer'
              className='flex items-center justify-center gap-2 px-6 py-2.5 bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white font-bold rounded-xl text-xs md:text-sm transition-colors duration-300 shadow-sm border border-indigo-100 hover:border-indigo-600'
            >
              <LaunchIcon fontSize='small' />
              Live Demo
            </a>
          )}

          <a 
            href={data.github_link} 
            target='_blank' 
            rel='noreferrer'
            className='flex items-center justify-center gap-2 px-6 py-2.5 bg-white hover:bg-slate-800 text-slate-700 hover:text-white font-bold rounded-xl text-xs md:text-sm transition-colors duration-300 border border-slate-200 hover:border-slate-800 shadow-sm'
          >
            <GitHubIcon fontSize='small' />
            Source Code
          </a>
        </div>

      </div>
    </div>
  );
}

export default ProjectsChild;
