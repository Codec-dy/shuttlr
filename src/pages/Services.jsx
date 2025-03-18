import React from 'react'
import { assets } from '../assets/assets'
import MiniCards from '../components/MiniCards'
import Button from '../components/Button'

const Services = () => {
  return (
    <div>
       <div style={{ backgroundImage: `url(${assets.background2})` }} className={`min-h-[100vh]  bg-cover bg-center px-4`}> 
        <div className='flex flex-col gap-10'>
          <div className="text-white text-center p-10 flex flex-col gap-5 bg-[#799bfd99]">
            <h1 className='text-5xl'>Our Services</h1>
            <p className='text-xl sm:text-3xl text-gray-600'>Your trusted ride solution for Luther College students and the Decorah area.</p>
        </div>
        <div className='flex flex-col items-center sm:flex-row gap-12 justify-center'><MiniCards cat={"Airport Shuttle"} title={"Airport Shuttle"} text={"Reliable rides to and from regional airports with pre-booked slots for your convenience."}/>
        <MiniCards cat={"Event Rides"} title={"Event Transportation"} text={"Providing safe and easy rides for group outings, college events, and social gatherings."}/>
        <MiniCards cat={"Town Trips"} title={"Local Town Trips"} text={"Quick and affordable transportation to shops, restaurants, and essential services in Decorah."}/></div>
        <div className="text-white text-center p-10 flex flex-col gap-5 bg-[#799bfd99]">
            <h1 className='text-5xl'>Get in Touch</h1>
            <p className='text-3xl text-gray-600'>For bookings and inquiries, reach out to us!</p>
            <div className='w-[200px] self-center'><Button text={"Contact Us"} /></div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Services