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
    <div className='flex flex-col items-center text-center bg-white hover:-translate-y-1 hover:shadow-md hover:border-blue-200 transition-all duration-200 p-2 md:p-3 rounded-lg shadow-sm border border-slate-100 group'>
      <div className='w-10 h-10 md:w-12 md:h-12 mb-1'>
        <img className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-200' src={`Images/${name}.png?v=6`} alt={name} />
      </div>
      <h1 className='font-semibold text-xs md:text-sm mt-1 text-slate-700'>{name}</h1>
    </div>
  )
}

export default SkillsChild
