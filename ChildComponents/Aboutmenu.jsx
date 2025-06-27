import React from 'react'

function Aboutmenu({ name, active_button, onButtonClick }) {

    var styling="bg-blue-500"

    if (active_button === name) {
        styling="bg-black ring-2 shadow-2xl text-red-500"
    }


    return (
        <div className={` ${styling} hover:bg-blue-700 hover:text-white rounded-lg md:rounded-2xl mb-3 `}>

            <button onClick={() => onButtonClick(name)} className='w-31 h-10 text-lg font-semibold md:w-40 md:h-17 md:text-2xl md:font-normal font-sans cursor-pointer '>{name}</button>

        </div>
    )
}

export default Aboutmenu