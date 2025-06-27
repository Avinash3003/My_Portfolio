import React from 'react'
import Header from './Header'
import Aboutmenu from '../ChildComponents/Aboutmenu'
import SummaryContent from '../ChildComponents/SummaryContent'
import SkillsContent from '../ChildComponents/SkillsContent'
import CertiContent from '../ChildComponents/CertiContent'
import AcheivContent from '../ChildComponents/AcheivContent'

import { useState } from 'react'

function About() {

    const [active,setActive] = useState("Summary");

    function handleClick(name){
        console.log(name)
        setActive(name)
    }




  return (
    <div className='p-7 bg-gray-200'>
        <Header/>
        <div className='flex flex-col md:flex-row justify-evenly gap-10 md:mt-10'>
            <div className='flex flex-wrap gap-3 md:flex-col text-center mt-20'>
                <Aboutmenu onButtonClick={handleClick} active_button={active} name="Summary"/>
                <Aboutmenu onButtonClick={handleClick} active_button={active} name="Skills"/>
                <Aboutmenu onButtonClick={handleClick} active_button={active} name="Certifications"/>
                <Aboutmenu onButtonClick={handleClick} active_button={active} name="Acheivements"/>
            </div>


            <div>
                <div className=' w-auto h-auto  md:w-250 md:h-133 border-3 shadow-2xl'>

                    {active==="Summary"  && <SummaryContent/>}
                    {active==="Skills" && <SkillsContent/>}
                    {active==="Certifications" && <CertiContent/>}
                    {active==="Acheivements" && <AcheivContent/>}


                </div>

            </div>



        </div>





    </div>
  )
}

export default About