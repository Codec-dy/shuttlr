import React from 'react'
import { assets } from '../assets/assets'
import Button from "../components/Button"
const Home = () => {
  return (
      <div style={{ backgroundImage: `url(${assets.background1})` }} className={`min-h-[100vh]  bg-cover bg-center px-4`}> 
        <div className='flex flex-col justify-center items-center gap-2 text-center'>
          <h1 className='text-4xl p-2 mt-40 sm:mt-10'>Need a Ride?</h1>
          <h2 className='text-5xl sm:text-7xl p-2'>We are here to help!</h2>
          <div className='flex flex-col border rounded-sm p-4 gap-4 items-center w-full max-w-[400px] text-left px-5'>
            <div className='flex flex-row gap-4 items-center w-full'>
              <label className='min-w-[40px]'>From</label>
              <input placeholder='Enter beginning city' className='border bg-white p-1 w-full'/>
            </div>

            <div className='flex flex-row gap-4 items-center w-full'>
              <label className='min-w-[40px]'>To</label>
              <input placeholder='Enter destination city' className='border bg-white p-1 w-full'/>
            </div>
            <div className='w-full'><Button text={"Get a Ride"}/></div>
          </div>
        </div>
      </div>
    
  )
}

export default Home