import React from 'react'

const MiniCards = ({cat, title, text}) => {
  return (
    <div className="bg-white w-full max-w-[300px] border-[3px] border-[#1e3a8a] rounded-xl text-center p-4 transition-all duration-[200ms] hover:scale-102">
            <div><img /> {cat}</div>
            <h3 className='#1e3a8a font-semibold text-2xl mt-3 text-[#1e3a8a]'>{title}</h3>
            <p className='text-gray-600 text-xs'>{text}</p>
    </div>
  )
}

export default MiniCards