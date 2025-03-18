import React from 'react'

const MiniCard2 = ({title,text}) => {
  return (
    <div className="flex max-w-[400px] flex-col gap-3 bg-white w-full border-[3px] border-l-[#1e3a8a] border-white rounded-xl text-left p-4 transition-all duration-[200ms] hover:scale-102">
            <h3 className='#1e3a8a text-xl font-semibold text-[#1e40af]'>{title}</h3>
            <p className='text-gray-600 text-xs'>{text}</p>
    </div>
  )
}

export default MiniCard2