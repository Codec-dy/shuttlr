import React from 'react'

const MiniCard3 = ({name,text,img}) => {
  return (
    <div className="bg-white self-center w-full max-w-[300px] border-[3px] border-[#1e3a8a] rounded-xl text-center p-4 transition-all duration-[200ms] hover:scale-102">
        <img src={img} className='border justify-self-center rounded-full border-[#1e3a8a] object-cover w-[200px] h-[200px]' />
        <h3 className='#1e3a8a text-xl mt-4'>{name}</h3>
        <p className='text-gray-600 text-xs'>{text}</p>
    </div>
  )
}

export default MiniCard3