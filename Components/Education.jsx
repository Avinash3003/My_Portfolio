
import React from 'react';
import Header from './Header';
import { edu_details } from '../ChildComponents/data';

function Education() {
  return (
    <div className='p-4 md:p-10 bg-gray-200 min-h-screen'>
      <div className='mb-5'>
        <Header />
      </div>

      {edu_details.map((item, index) => (
        <div
          key={index}
          className='flex flex-wrap lg:flex-nowrap items-center p-4 justify-start ring-1 mx-4 md:mx-20 lg:mx-70 mb-5 gap-6 lg:gap-15 shadow-xl bg-white rounded-xl'
        >
          {/* Image Container */}
          <div className='w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-amber-200 flex items-center justify-center rounded-lg'>
            <img
              src={`Clg_logo/${item.img_name}.png`}
              alt="Clg_logo"
              className='w-24 h-24 md:w-28 md:h-28 object-contain'
            />
          </div>

          {/* Divider */}
          <div className='w-full h-1 lg:w-1 lg:h-30 bg-black my-2 lg:my-0'></div>

          {/* Text Details */}
          <div className='flex flex-col gap-1'>
            <h1 className='text-2xl  font-semibold'>{item.name}</h1>
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
  );
}

export default Education;




