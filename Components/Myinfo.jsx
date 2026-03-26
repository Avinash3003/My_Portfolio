import React from 'react';

function Myinfo() {
  return (
    <div className='mt-10 md:mt-20 p-2'>
      <div className='flex flex-col-reverse md:flex-row justify-around items-center gap-10 md:gap-0'>
        <div className='text-center md:text-left'>
          <h1 className='md:text-5xl text-2xl mb-3 font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-white'>
            Hello,
          </h1>
          <h1 className='md:text-8xl text-6xl mb-3 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-blue-500 to-purple-500'>
            I am Avinash
          </h1>
          <p className='text-xl bg-clip-text'>
            DevOps | LLMs Enthusiast | Data Science | MERN Stack | DSA | Databases
          </p>
        </div>

        <div className='relative w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-[350px] flex items-center justify-center flex-shrink-0 animate-float group mt-10 md:mt-0'>
          {/* Stacked offset frames */}
          <div className='absolute inset-0 bg-amber-200 rounded-3xl rotate-6 opacity-80 group-hover:rotate-12 transition-transform duration-500 ease-out'></div>
          <div className='absolute inset-0 bg-amber-400 rounded-3xl -rotate-6 opacity-80 group-hover:-rotate-12 transition-transform duration-500 ease-out'></div>
          
          {/* Main Image Container */}
          <div className='relative w-full h-full bg-amber-300 rounded-3xl shadow-2xl overflow-hidden border-4 border-white/50'>
            <img 
              className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out' 
              src='Profile.png' 
              alt='Profile of Avinash'
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Myinfo;

