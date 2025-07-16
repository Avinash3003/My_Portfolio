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
    <div className='p-4 sm:p-6 pb-12 text-gray-800'>
      <div className='bg-white rounded-xl shadow p-5'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
          {skills.map((item) => (
            <SkillsChild key={item} name={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillsContent
