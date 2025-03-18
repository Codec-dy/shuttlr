import React from 'react'
import MiniCard2 from '../components/MiniCard2'
import { assets } from '../assets/assets'
import MiniCard3 from '../components/MiniCard3'

const About = () => {
  return (
    <div>
        <div style={{ backgroundImage: `url(${assets.background2})` }} className={`min-h-[100vh]  bg-cover bg-center`}> 
            <div className='flex flex-col gap-10'>
              <div className="text-white text-center p-10 flex flex-col gap-5 bg-[#799bfd99]">
                <h1 className='text-5xl'>About Us</h1>
                <p className='text-3xl text-gray-600'>Your trusted ride solution for Luther College students and the Decorah area.</p>
            </div>
            <div className='flex flex-col sm:flex-row gap-5'>
                    <MiniCard2 title={"Our Mission"} text={"Shuttlr is a testament to the innovative spirit of Luther College, brought to life by Daniel Yormesor (Class of '27) and Mahadi Hossain Aryan (Class of '28). We're not just providing a shuttle service; we're building a solution to a real need within our student community and the broader Decorah area."}/>
                    <MiniCard2 title={"Why Shuttlr?"} text={"As Luther College students, we've experienced firsthand the challenges of getting around, whether it's for airport trips, events, or simply navigating the town. We recognized a gap in reliable and convenient transportation and decided to create Shuttlr to fill it."}/>
                    <MiniCard2 title={"Our Journey"} text={"This project is a reflection of our commitment to applying our academic knowledge to practical, real-world problems. We've poured our dedication and problem-solving skills into every aspect of Shuttlr, from planning routes to developing our user-friendly booking system."}/>
                </div>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <MiniCard3 img={assets.daniel} name={"Daniel Yormesor"} text={"ounder of Shuttlr | Luther College Class of '27"} />
                <MiniCard3 img={assets.aryy} name={"Mahadi Hossain Aryan"} text={"Co-founder of Shuttlr | Luther College Class of '28"}/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About