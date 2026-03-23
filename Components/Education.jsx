
import React from 'react';
import Header from './Header';
import { edu_details } from '../ChildComponents/data';

function Education() {
  return (
    <div className='bg-gray-200 min-h-screen flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 pt-6 pb-12 w-full overflow-y-scroll overflow-x-hidden box-border'>
      <Header />

      <div className="flex flex-col items-center w-full mt-10 md:mt-16">
        {edu_details.map((item, index) => (
          <div
            key={index}
            className='flex flex-wrap lg:flex-nowrap items-center p-6 justify-start ring-1 ring-gray-300 w-full max-w-5xl mb-6 sm:mb-8 gap-6 lg:gap-12 shadow-xl bg-white rounded-xl'
          >
            {/* Image Container */}
            <div className='w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-amber-200 flex items-center justify-center rounded-lg flex-shrink-0'>
              <img
                src={`Clg_logo/${item.img_name}.png`}
                alt="Clg_logo"
                className='w-24 h-24 md:w-28 md:h-28'
              />
            </div>

            {/* Divider */}
            <div className='w-full h-1 lg:w-1 lg:h-30 bg-black my-2 lg:my-0 flex-shrink-0'></div>

            {/* Text Details */}
            <div className='flex flex-col gap-1'>
              <h1 className='text-2xl font-semibold'>{item.name}</h1>
              <div className='flex flex-col md:flex-row md:items-center gap-1'>
                <h2 className='w-full md:w-60'>{item.Degree}</h2>
                <h2>{item.duration}</h2>
              </div>
              <h2>{item.Branch}</h2>
              <h2>{item.marks}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;




