// import React, { useEffect } from 'react'
// import Header from './Header'
// import Aboutmenu from '../ChildComponents/Aboutmenu'
// import SummaryContent from '../ChildComponents/SummaryContent'
// import SkillsContent from '../ChildComponents/SkillsContent'
// import CertiContent from '../ChildComponents/CertiContent'
// import AcheivContent from '../ChildComponents/AcheivContent'

// import { useState } from 'react'

// function About() {

//     const [active,setActive] = useState("Summary");

//     function handleClick(name){
//         console.log(name)
//         setActive(name)
//     }

//   return (
//     <div className='p-7 bg-gray-200'>
//         <Header/>
//         <div className='flex flex-col md:flex-row justify-evenly gap-10 md:mt-10'>
//             <div className='flex flex-wrap gap-3 md:flex-col text-center mt-20'>
//                 <Aboutmenu onButtonClick={handleClick} active_button={active} name="Summary"/>
//                 <Aboutmenu onButtonClick={handleClick} active_button={active} name="Skills"/>
//                 <Aboutmenu onButtonClick={handleClick} active_button={active} name="Certifications"/>
//                 <Aboutmenu onButtonClick={handleClick} active_button={active} name="Acheivements"/>
//             </div>


//             <div className='relative'>
//                 <div className='w-auto h-auto overflow-auto rounded-sm pb-4 lg:w-250 lg:h-133 border-1 border-gray-600 shadow-lg shadow-gray-700'>

//                     {active==="Summary"  && <SummaryContent/>}
//                     {active==="Skills" && <SkillsContent/>}
//                     {active==="Certifications" && <CertiContent/>}
//                     {active==="Acheivements" && <AcheivContent/>}


//                 </div>
//                 <div className="absolute bottom-0 left-0 w-full h-10 pointer-events-none bg-gradient-to-t from-gray-200 to-transparent"></div>

//             </div>

//         </div>
//     </div>
//   )
// }

// export default About




import React, { useState } from 'react'
import Header from './Header'
import Aboutmenu from '../ChildComponents/Aboutmenu'
import SummaryContent from '../ChildComponents/SummaryContent'
import SkillsContent from '../ChildComponents/SkillsContent'
import CertiContent from '../ChildComponents/CertiContent'
import AcheivContent from '../ChildComponents/AcheivContent'

function About() {
    const [active, setActive] = useState("Summary")

    function handleClick(name) {
        setActive(name)
    }

    return (
        <div className='p-4 sm:p-6 md:p-8 bg-slate-100 min-h-screen'>
            <Header />
            <div className='flex flex-col md:flex-row justify-evenly gap-6 md:gap-10 md:mt-10'>

                {/* Left menu buttons */}
                <div className='flex flex-wrap gap-3 md:flex-col text-center mt-10 md:mt-20'>
                    <Aboutmenu onButtonClick={handleClick} active_button={active} name="Summary" />
                    <Aboutmenu onButtonClick={handleClick} active_button={active} name="Skills" />
                    <Aboutmenu onButtonClick={handleClick} active_button={active} name="Certifications" />
                    <Aboutmenu onButtonClick={handleClick} active_button={active} name="Acheivements" />
                </div>

                {/* Content container */}
                <div className='relative w-full md:w-[65%]'>
                    <div className='overflow-auto max-h-[550px] bg-white rounded-xl border border-gray-300 shadow-md p-5 scroll-smooth'>

                        {active === "Summary" && <SummaryContent />}
                        {active === "Skills" && <SkillsContent />}
                        {active === "Certifications" && <CertiContent />}
                        {active === "Acheivements" && <AcheivContent />}
                    </div>

                    {/* Bottom scroll fade */}
                    <div className="absolute bottom-0 left-0 w-full h-10 pointer-events-none bg-gradient-to-t from-white to-transparent rounded-b-xl" />
                </div>
            </div>
        </div>
    )
}

export default About

