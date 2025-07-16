// import React from 'react'

// function CertiChild({ data, idx }) {
//   return (
//     <div className=''>
//       <div className='text-center mb-3 font-medium italic text-2xl font-sans'>
//         <h1>{data.title}</h1>
//       </div>
//       <div className='mb-6'>
//         {
//           (idx % 2 == 0) ? (<div className='flex items-center gap-5'>
//             <img className='w-100 h-60' src={`Certi/${data.img_name}`} alt="Not found" />
//             <h1 className='text-justify'>{data.description}</h1>
//           </div>) :
//             (<div className='flex gap-5 items-center'>
//               <h1 className='text-justify'>{data.description}</h1>
//               <img className='w-100 h-60' src={`Certi/${data.img_name}`} alt="Not found" />
//             </div>)
//         }
//       </div>


//     </div>
//   )
// }

// export default CertiChild


import React from 'react'

function CertiChild({ data, idx }) {
  return (
    <div>
      <div className='text-center mb-3 font-semibold italic text-xl sm:text-2xl font-sans text-gray-800'>
        <h1>{data.title}</h1>
      </div>

      <div className='mb-6'>
        {
          (idx % 2 === 0) ? (
            <div className='flex flex-col md:flex-row items-center gap-5'>
              <img className='w-full md:w-[300px] h-auto object-contain rounded-lg border border-gray-300 shadow-sm' src={`Certi/${data.img_name}`} alt="Not found" />
              <p className='text-justify text-gray-700 bg-slate-50 p-3 rounded-md shadow-sm'>{data.description}</p>
            </div>
          ) : (
            <div className='flex flex-col md:flex-row-reverse items-center gap-5'>
              <img className='w-full md:w-[300px] h-auto object-contain rounded-lg border border-gray-300 shadow-sm' src={`Certi/${data.img_name}`} alt="Not found" />
              <p className='text-justify text-gray-700 bg-slate-50 p-3 rounded-md shadow-sm'>{data.description}</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default CertiChild

