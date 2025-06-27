import React from 'react'

function Nav({name,onclick}) {
  return (
    <div className=''>
        <button onClick={onclick} className='hover:bg-orange-600 cursor-pointer p-2 bg-orange-400 shadow-lg shadow-orange-500/30 active:bg-amber-700 rounded-xl'>
          {name}</button>
    </div>
  )
}

export default Nav