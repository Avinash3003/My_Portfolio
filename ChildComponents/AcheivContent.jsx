// import React from 'react'

// function AcheivContent() {
//     return (
//         <div className='p-3 md:p-10'>

//             <div className='text-center mb-6'>
//                 <h1 className='text-xl font-semibold'>📌Gate 2025</h1>
//                 <p> Qualified in Gate 2025</p>
//                 <p>AIR 11318</p>
//             </div>

//             <div className='flex flex-col md:flex-row   justify-evenly text-center'>
//                 <div className='w-auto h-auto mb-6 md:mb-0 md:w-90'>
//                     <h1 className='text-xl w-auto md:w-80 font-semibold'>📌Top10 in state-level coding Hackathon</h1>
//                     <p>Conducted by CVCorp and APTPOs consortium. Claimed ₹10000 reward and Certificate.</p>
//                 </div>

//                 <div>
//                     <div className='w-auto  md:w-75'>
//                         <h2 className='text-xl font-semibold'>📌Member of MSRC</h2>
//                         <p>A space research club, Worked as Control module lead for 4 months in Rocketry Project.</p>
//                     </div>
//                 </div>
                
//             </div>

//             <div className='flex flex-col md:flex-row justify-around mt-10 text-center'>

//                 <div className='md:w-60 mb-6 md:mb-0'>
//                     <h1 className='text-xl font-semibold'>📌Secured 2nd place in Codefest</h1>
//                     <p>Won cash price in Coding Competition conducted by College.</p>

//                 </div>

//                 <div className='md:w-60 mb-6 md:mb-0'>
//                     <h1 className='text-xl font-semibold'>📌Solved DSA problems in leetcode</h1>
//                     <p>Solved 250+ DSA problems in leetcode.</p>

//                 </div>

//                 <div className=' md:w-65'>
//                     <h1 className='text-xl font-semibold'>📌Solasta-2K24 Round2 Qualifier</h1>
//                     <p>Qualified for round2 in National wide competition Solasta-2k24 organized by IIITDM-Kurnool.</p>

//                 </div>

//             </div>

//         </div>
//     )
// }

// export default AcheivContent


import React from 'react'

function AcheivContent() {
  return (
    <div className='p-4 sm:p-6 pb-12 text-gray-800'>
      <div className='space-y-6'>

        <div className='bg-white p-6 rounded-xl shadow text-center'>
          <h1 className='text-xl font-semibold text-purple-700'>📌 Gate 2025</h1>
          <p>Qualified in Gate 2025</p>
          <p>AIR 11318</p>
        </div>

        <div className='flex flex-col md:flex-row gap-6 justify-evenly'>
          <div className='bg-white text-center p-4 md:w-[45%] rounded-xl shadow'>
            <h1 className='text-lg font-semibold text-purple-700'>📌 Top 10 in State-Level Coding Hackathon</h1>
            <p>Conducted by CVCorp and APTPOs consortium. Claimed ₹10000 reward and Certificate.</p>
          </div>

          <div className='bg-white text-center p-4 md:w-[45%] rounded-xl shadow'>
            <h2 className='text-lg font-semibold text-purple-700'>📌 Member of MSRC</h2>
            <p>A space research club. Worked as Control Module Lead for 4 months in Rocketry Project.</p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-4'>
          <div className='bg-white  text-center p-4 rounded-xl shadow'>
            <h1 className='text-lg font-semibold text-purple-700'>📌 Secured 2nd Place in Codefest</h1>
            <p>Won cash prize in Coding Competition conducted by college.</p>
          </div>

          <div className='bg-white text-center p-4 rounded-xl shadow'>
            <h1 className='text-lg font-semibold text-purple-700'>📌 Solved DSA Problems in LeetCode</h1>
            <p>Solved 250+ DSA problems in LeetCode.</p>
          </div>

          <div className='bg-white  text-center p-4 rounded-xl shadow'>
            <h1 className='text-lg font-semibold text-purple-700'>📌 Solasta-2K24 Round 2 Qualifier</h1>
            <p>Qualified for Round 2 in nationwide competition Solasta-2K24 organized by IIITDM-Kurnool.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AcheivContent
