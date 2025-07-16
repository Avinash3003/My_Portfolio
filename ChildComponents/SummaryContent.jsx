// import React from 'react'

// function SummaryContent() {
//   return (
//     <div className='md:p-15 p-5'>
//       <h1 className='text-4xl  font-serif mb-4'>Hi,I'm Avinash!,</h1>
//       <h1 className='text-lg justify-between'>I'm a 2025 graduate with a strong passion for technology and innovation. 
//         I take great satisfaction in my dedication to my work and ongoing exploration of my interests, particularly in the domains of data science, software development, and artificial intelligence. 
//         I like using clever, scalable solutions to solve real-world issues, and I'm constantly willing to pick up new skills, adjust, and make a significant contribution to any team or project I work on.
//       </h1>

//       <h1 className='text-2xl font-medium mt-10 mb-2 underline'>Hobbies: </h1>
//       <ul className=''>
//         <li className=''>Playing Football</li>
//         <li className=''>Reading Marvel Comics</li>
//         <li className=''>Surfing the Internet</li>
//         <li className=''>Listening to music</li>
//       </ul>
      
//     </div>
//   )
// }

// export default SummaryContent


import React from 'react'

function SummaryContent() {
  return (
    <div className='p-4 sm:p-6 pb-12 text-gray-800'>
      <div className='bg-white shadow-md rounded-xl p-6'>
        <h1 className='text-3xl font-serif sm:text-4xl font-semibold mb-4 text-blue-800'>Hi, I'm Avinash!</h1>
        <p className='text-base sm:text-lg leading-relaxed text-justify'>
          I'm a 2025 graduate with a strong passion for technology and innovation. I take great satisfaction in my dedication to my work and ongoing exploration of my interests, particularly in the domains of data science, software development, and artificial intelligence.
          I like using clever, scalable solutions to solve real-world issues, and I'm constantly willing to pick up new skills, adjust, and make a significant contribution to any team or project I work on.
        </p>

        <h2 className='text-xl font-medium mt-8 mb-3 underline text-blue-700'>Hobbies:</h2>
        <ul className='list-disc list-inside space-y-1 text-gray-700'>
          <li>Playing Football</li>
          <li>Reading Marvel Comics</li>
          <li>Surfing the Internet</li>
          <li>Listening to Music</li>
        </ul>
      </div>
    </div>
  )
}

export default SummaryContent
