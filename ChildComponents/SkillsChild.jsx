// import React from 'react'

// function SkillsChild({ name }) {
//     return (
//         <div className='w-auto h-auto flex flex-col items-center text-center'>
//             <div className='w-10 h-10 inline'>
//                 <img className='w-full h-full object-contain' src={`Images/${name}.png`} alt={name} />
//             </div>
//             <div>
//                 <h1 className='font-semibold inline text-xl italic mt-2'>{name}</h1>
//             </div>
//         </div>
//     )
// }

// export default SkillsChild


import React from 'react'

function SkillsChild({ name }) {
  return (
    <div className='flex flex-col items-center text-center bg-gray-50 hover:bg-blue-50 transition p-3 rounded-lg shadow-sm'>
      <div className='w-12 h-12'>
        <img className='w-full h-full object-contain' src={`Images/${name}.png`} alt={name} />
      </div>
      <h1 className='font-semibold text-base mt-2 text-gray-700 italic'>{name}</h1>
    </div>
  )
}

export default SkillsChild
