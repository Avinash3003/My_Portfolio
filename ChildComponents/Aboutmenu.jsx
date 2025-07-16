// import React from 'react'

// function Aboutmenu({ name, active_button, onButtonClick }) {

//     var styling="bg-blue-500 hover:bg-blue-700 hover:text-white "

//     if (active_button === name) {
//         styling="bg-black ring-2 shadow-2xl text-red-500"
//     }


//     return (
//         <div className={` ${styling} rounded-lg md:rounded-2xl mb-3 `}>

//             <button onClick={() => onButtonClick(name)} className='w-31 h-10 text-lg font-semibold md:w-40 md:h-17 md:text-2xl md:font-normal font-sans cursor-pointer '>{name}</button>

//         </div>
//     )
// }

// export default Aboutmenu


import React from 'react';

function Aboutmenu({ name, active_button, onButtonClick }) {
    const isActive = active_button === name;

    return (
        <div
            className={`w-full md:w-48 mb-3 transition-transform transform hover:scale-105 ${
                isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-xl'
                    : 'bg-white text-gray-800 border border-gray-300 shadow-sm hover:shadow-md'
            } rounded-2xl`}
        >
            <button
                onClick={() => onButtonClick(name)}
                className="w-full h-12 md:h-14 px-4 py-2 text-lg md:text-xl font-semibold font-sans tracking-wide rounded-2xl focus:outline-none"
            >
                {name}
            </button>
        </div>
    );
}

export default Aboutmenu;

