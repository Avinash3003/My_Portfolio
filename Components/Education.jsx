import React from 'react';
import Header from './Header';
import { experience } from '../ChildComponents/data';

function Education() {

  const calculateMonths = (start, end) => {
    const startDate = new Date(start);
    const endDate = end === "Present" ? new Date() : new Date(end);
    
    let months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += endDate.getMonth();
    months += 1;
    
    return months <= 1 ? `${months} Month` : `${months} Months`;
  };

  return (
    <div className='bg-slate-50 min-h-screen flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 pt-6 pb-24 w-full overflow-y-scroll overflow-x-hidden box-border'>
      <Header />
      
      <div className='w-full max-w-5xl mx-auto mt-10 md:mt-16'>
        <h1 className='text-3xl md:text-5xl font-black text-center text-slate-800 mb-16 md:mb-24 tracking-tight drop-shadow-sm'>
          Professional <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600'>Experience</span>
        </h1>

        <div className='relative w-full max-w-4xl mx-auto'>
          {/* Continuous Dotted Center Line */}
          <div className='absolute left-6 md:left-[30%] top-8 bottom-8 w-0 border-l-[3px] border-dashed border-indigo-300/80 translate-x-[-50%] z-0 rounded-full'></div>

          {experience.map((item, index) => (
            <div key={index} className='relative flex flex-col md:flex-row w-full mb-10 md:mb-16 group'>
              
              {/* Desktop Left Column: Floating Dates Axis */}
              <div className='hidden md:flex flex-col w-[30%] pr-14 pt-3 items-end relative z-10'>
                <div className='flex flex-col items-end gap-1.5 text-right'>
                  <span className='px-4 py-2 bg-white text-indigo-700 font-extrabold rounded-xl text-sm shadow-[0_4px_20px_rgba(79,70,229,0.08)] border border-indigo-50/50 uppercase tracking-wide group-hover:-translate-x-1 group-hover:shadow-[0_4px_20px_rgba(79,70,229,0.15)] transition-all duration-300'>
                    {item.duration}
                  </span>
                  <span className='text-[0.75rem] font-bold uppercase tracking-widest text-slate-400 mr-2 group-hover:text-indigo-400 transition-colors duration-300'>
                    ~ {calculateMonths(item.startDate, item.endDate)}
                  </span>
                </div>
              </div>

              {/* Timeline Node (Perfect Axis Overlay) */}
              <div className='absolute left-6 md:left-[30%] top-5 translate-x-[-50%] w-5 h-5 md:w-7 md:h-7 bg-white border-[4px] border-indigo-500 rounded-full group-hover:bg-indigo-600 group-hover:border-indigo-100 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(79,70,229,0.4)] transition-all duration-300 z-10 flex items-center justify-center'>
                 <div className='w-1.5 h-1.5 bg-indigo-500 rounded-full group-hover:bg-white transition-colors duration-300'></div>
              </div>

              {/* Right Column: Experience Card */}
              <div className='w-full md:w-[70%] pl-16 md:pl-12'>
                <div className='bg-white p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-indigo-100 hover:shadow-[0_15px_40px_rgb(79,70,229,0.12)] transition-all duration-300 group-hover:-translate-y-1 relative overflow-hidden'>
                  
                  {/* Subtle Top Gradient Bar */}
                  <div className='absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out'></div>

                  {/* Mobile Mobile Date Badge (Hidden on Desktop) */}
                  <div className='md:hidden flex flex-row items-center gap-2 mb-5'>
                    <span className='px-3 py-1.5 bg-indigo-50 border border-indigo-100/50 text-indigo-700 font-bold rounded-lg text-[0.8rem] shadow-sm'>
                      {item.duration}
                    </span>
                    <span className='text-[0.7rem] font-bold text-slate-400 uppercase tracking-widest'>
                      ({calculateMonths(item.startDate, item.endDate)})
                    </span>
                  </div>

                  <h2 className='text-2xl md:text-3xl font-black text-slate-800 tracking-tight leading-tight'>{item.role}</h2>
                  <h3 className='text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mt-1 mb-5 inline-block'>
                    {item.company}
                  </h3>

                  <ul className='space-y-3.5'>
                    {item.details.map((detail, idx) => (
                      <li key={idx} className='flex items-start text-slate-600 text-sm md:text-[1.05rem] leading-relaxed'>
                        <span className='mr-3 mt-2 block w-[5px] h-[5px] rounded-full bg-indigo-300 flex-shrink-0'></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
