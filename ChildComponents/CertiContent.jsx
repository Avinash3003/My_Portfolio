import React from 'react'
import { certificates } from './data'
function CertiContent() {
    return (
        <div className='p-5'>

            <div className='text-center bg-amber-400 mb-5 md:mb-10 font-bold text-2xl'>
                <h1>Certificates / Trainings</h1>
            </div>
            <div>

                {
                    certificates.map((item,index)=> <h1 className='italic text-2xl md:text-xl text-amber-800 ml-4 md:ml-30 mb-2'>{item}</h1>)

                }

            </div>

        </div>
    )
}

export default CertiContent