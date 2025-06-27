import React from 'react'

function SkillsChild({name}) {
  return (
    <div className='inline-flex bg-gradient-to-r from-emerald-500 via-green-400 to-green-300 rounded-3xl h-10 w-62'>

        <div className='py-2 md:p-2 font-semibold  text-shadow-md text-shadow-gray-300 w-49 md:w-full text-center'>
            <h1>{name}</h1>
        </div>


        <div className=' rounded-2xl'>
            <img src={`Images/${name}.png`} alt="no" className='h-10 w-25 rounded-3xl' />
        </div>

        
    </div>
  )
}

export default SkillsChild