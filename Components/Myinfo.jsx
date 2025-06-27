// import React from 'react'

// function Myinfo() {
//     return (
//         <div className='mt-20'>

//             <div className='flex justify-around gap-6 align-middle items-center'>
//                 <div className=''>
//                     <h1 className='text-5xl  mb-3 font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-white'>Hello,</h1>
//                     <h1 className='text-8xl mb-3 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-blue-500 to-purple-500'>I am Avinash</h1>
//                     <p className='text-xl bg-clip-text'>Smart Coder | MERN Stack Developer | AI & ML Enthusiast | Power BI | Data Science</p>
//                 </div>
//                 <div className='w-100 h-100 bg-amber-300'>
//                     <img src={""}/>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Myinfo


import React from 'react';

function Myinfo() {
  return (
    <div className='mt-10 md:mt-20 p-2'>
      <div className='flex flex-col-reverse md:flex-row justify-around items-center'>
        <div className=''>
          <h1 className='md:text-5xl text-2xl mb-3 font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-white'>
            Hello,
          </h1>
          <h1 className='md:text-8xl text-6xl  mb-3 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-blue-500 to-purple-500'>
            I am Avinash
          </h1>
          <p className='text-xl bg-clip-text'>
            Smart Coder | MERN Stack Developer | AI & ML Enthusiast | Power BI | Data Science
          </p>
        </div>

        <div className='w-60 h-60 mb-7 md:mb-0  md:w-90 md:h-90  bg-amber-300'>
          <img src={""} />
        </div>
      </div>
    </div>
  );
}

export default Myinfo;

