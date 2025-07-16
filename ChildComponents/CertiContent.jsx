// import React from 'react'
// import { certificates } from './data'
// import CertiChild from './CertiChild'


// function CertiContent() {
//     return (
//         <div className='p-5 pb-6'>

//             <div className='text-center bg-amber-400 rounded-3xl mb-2 md:mb-5 font-bold text-4xl'>
//                 <h1>Certificates / Trainings</h1>
//             </div>
//             <div className=''> 

//                 {
//                     certificates.map((item,index) => <CertiChild key={index} idx={index} data={item}/>)

//                 }

//             </div>

//         </div>
//     )
// }

// export default CertiContent



import React from 'react'
import { certificates } from './data'
import CertiChild from './CertiChild'

function CertiContent() {
    return (
        <div className='p-4 sm:p-6 pb-10'>

            <div className='text-center bg-indigo-100 text-indigo-800 rounded-xl mb-4 md:mb-6 font-bold text-2xl sm:text-3xl md:text-4xl py-3 shadow'>
                <h1>Certificates / Trainings</h1>
            </div>

            <div className='space-y-8'>
                {
                    certificates.map((item, index) => (
                        <CertiChild key={index} idx={index} data={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default CertiContent

