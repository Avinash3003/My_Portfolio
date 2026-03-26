// import React from 'react'
// import { skills } from './data'
// import SkillsChild from './SkillsChild'



// function SkillsContent() {

//     return (
//         <div className='p-2 bg-gray-150 md:p-10'>
            
//             {/* <h1>Skills.........</h1> */}
//             <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-6 lg:gap-7 items-center'>

//                 {
//                     skills.map((item)=> <SkillsChild key={item} name={item} /> )

//                 }

//             </div>


            



//         </div>
//     )
// }

// export default SkillsContent


import React from 'react'
import { skills } from './data'
import SkillsChild from './SkillsChild'

function SkillsContent() {
  return (
    <div className='p-2 sm:p-4 pb-8 text-gray-800 w-full'>
      <div className='bg-white rounded-2xl shadow-sm p-4 md:p-6 flex flex-col gap-6 md:gap-8 border border-gray-100'>
        {skills.map((skillGroup, index) => (
          <div key={index} className='bg-slate-50/50 rounded-xl shadow-sm border border-slate-200 p-4 md:p-5 relative overflow-hidden'>
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-sky-500 to-blue-700"></div>
            <div className="flex items-center justify-center mb-5 md:mb-6">
              <div className="h-[2px] bg-gradient-to-r from-transparent to-blue-300 w-8 md:w-16 rounded-full"></div>
              <h2 className="mx-3 text-center text-lg md:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-blue-800 uppercase tracking-wide drop-shadow-sm">
                {skillGroup.category}
              </h2>
              <div className="h-[2px] bg-gradient-to-l from-transparent to-blue-300 w-8 md:w-16 rounded-full"></div>
            </div>
            <div className='flex overflow-x-auto gap-3 md:gap-4 lg:gap-5 pb-4 pt-2 snap-x'>
              {skillGroup.items.map((item) => (
                <div key={item} className="w-32 sm:w-40 flex-shrink-0 snap-start">
                  <SkillsChild name={item} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsContent
