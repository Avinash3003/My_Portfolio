import React from 'react'
import { skills } from './data'
import SkillsChild from './SkillsChild'



function SkillsContent() {

    return (
        <div className='p-2 md:p-15'>
            
            {/* <h1>Skills.........</h1> */}
            <div className='grid grid-cols-auto sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-7 '>

                {
                    skills.map((item)=> <SkillsChild key={item} name={item} /> )

                }

            </div>


            



        </div>
    )
}

export default SkillsContent