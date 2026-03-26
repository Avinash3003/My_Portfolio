import React from 'react';
import { edu_details } from './data';

function EduContent() {
  return (
    <div className='p-4 sm:p-6 pb-12 text-gray-800'>
      <div className="flex flex-col gap-6 md:gap-8 w-full mt-2">
        {edu_details.map((item, index) => (
          <div
            key={index}
            className='flex flex-wrap xl:flex-nowrap items-center p-5 md:p-6 justify-start border border-slate-200 w-full mb-2 gap-6 lg:gap-10 shadow-sm bg-slate-50 hover:shadow-md transition-shadow rounded-2xl'
          >
            {/* Image Container */}
            <div className='w-24 h-24 md:w-28 md:h-28 bg-white border border-slate-100 flex items-center justify-center rounded-xl flex-shrink-0 shadow-sm'>
              <img
                src={`Clg_logo/${item.img_name}.png`}
                alt="Clg_logo"
                className='w-20 h-20 md:w-24 md:h-24 object-contain'
              />
            </div>

            {/* Divider */}
            <div className='w-full h-[2px] xl:w-[2px] xl:h-28 bg-gradient-to-b from-transparent via-indigo-200 to-transparent my-2 xl:my-0 flex-shrink-0'></div>

            {/* Text Details */}
            <div className='flex flex-col gap-2 w-full'>
              <h1 className='text-xl md:text-2xl font-bold text-slate-800'>{item.name}</h1>
              <div className='flex flex-col xl:flex-row xl:items-center gap-1 xl:gap-8 text-sm md:text-base'>
                <h2 className='font-bold text-indigo-600'>{item.Degree}</h2>
                <h2 className='text-slate-500 font-medium'>{item.duration}</h2>
              </div>
              <h2 className='text-slate-700 font-medium'>{item.Branch}</h2>
              <h2 className='font-bold text-blue-800'>{item.marks}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EduContent;
