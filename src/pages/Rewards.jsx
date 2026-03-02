import React from 'react'
import Coldbrew from '../assets/coldbrew.png'

const Rewards = () => {
  return (
    <div>
        <div className='w-full max-w-full flex flex-row justify-between items-center lg:flex-row lg:items-center gap-6 bg-[#1b3321] text-white px-6 lg:px-10 py-3'>
        <div>STARBUCKS REWARDS</div>
        <a
        className='border px-2 py-3 rounded-full' 
        href="https://www.google.co.in">Join in the app
        </a>
    </div>
    <div className='flex flex-col lg:flex-row items-center lg:items-start lg:px-25 justify-center text-green-900 bg-[#f2e8d5]'>
           <div className='flex flex-col justify-center items-center w-full lg:w-1/2 lg:items-start p-6'>
            <h1 className='text-xl text-center lg:text-left py-9'>
                Its a great day for free coffee
            </h1>
            <h2 className='text-lg mb-5 text-center lg:text-left'>Signup and start enjoying the perks of Starbucks</h2>
            <a
            className='border items-center w-fit bg-green-800 px-2 text-center text-white py-1 rounded-full' 
            href="https://www.google.co.in">Join in the app
            </a>
            <a 
            className='underline mt-4'
            href="https://www.google.co.in">or join online</a>
            </div>
            <div className='w-full lg:w-1/2'>
                <img src={Coldbrew} alt="Coffee" className='w-full h-full object-cover' />
            </div>
        </div>
        <div className='flex flex-col items-center'>
            <h1>Getting started is easy</h1>
            <h2>Earn stars and get rewarded in a few easy steps</h2>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default Rewards