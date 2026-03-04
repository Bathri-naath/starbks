import React from 'react'
import { useState } from 'react'
import Coldbrew from '../assets/coldbrew.png'
import Rewfeatures from '../components/Rewfeatures'

const Rewards = () => {
    const gtstrt =[
        {id:1,
            title:"Create an account",
            dpara:(
            <>
            To get started,{" "}
            <a href="/joinnow" className='underline text-green-600'>join now.</a> {" "}You can also{" "}
            <a href="https://www.google.co.in" className='underline text-green-600'>join in the app</a>{" "}to get access to the full range of Starbucks® Rewards benefits.
            </>
            ),
            mpara:(
                <>
                <a href="https://www.google.co.in" className='underline text-green-600'>Join in the app</a>{" "}to get access to the full range of Starbucks® Rewards benefits. You can also{" "}
                <a href="/joinnow" className='underline text-green-600'>join online</a>.</>
            )
        },
        {id:2,
            title:"Order and pay how you'd like",
            dpara:(
            <>
            Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways.{" "}
            <a href="/joinnow" className='underline text-green-600'>Learn how.</a>
            </>
            ),
            mpara:(
            <>
            Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways.{" "}
            <a href="/joinnow" className='underline text-green-600'>Learn how.</a>
            </>
            )
        },
        {id:3,
            title:"Earn stars, get rewards",
            dpara:"As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!",
            mpara:"As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!"
        }
    ]
    const stars=[25, 100, 200, 300, 400]
    const [active,setActive]=useState(0)

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
            <div className='mx-6 lg:mx-25 py-9'>
                <div className='flex flex-col lg:flex-row'>
                    {gtstrt.map((gtstrt)=>(
                    <Rewfeatures
                    key={gtstrt.id}
                    id={gtstrt.id}
                    title={gtstrt.title}
                    mpara={gtstrt.mpara}
                    dpara={gtstrt.dpara}
                     />))}
                </div>
            </div>
        </div>
        <div className='bg-[#F0F2F5] pt-6 my-2'>
            <p className='text-center font-bold'>Get your favourites for free</p>
            <div className='flex justify-center'>
                <div className='relative w-full max-w-md'>
                    <div className='flex justify-between'>
                        {stars.map((value,index)=>(
                            <button
                            key={value}
                            onClick={()=>setActive(index)}
                            className='flex-1 py-2'>
                                {value}
                            </button>
                        ))
                        }
                    </div>
                    <div
                    className='absolute bottom-0 h-1 bg-green-700 transition-all duration-300'
                    style={{
                        width: `${100/ stars.length}%`,
                        left: `${(100 / stars.length) * active}%`
                    }}>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rewards