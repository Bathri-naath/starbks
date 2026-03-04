import React from 'react'
import { Link } from 'react-router-dom'

const Rewfeatures = ({id, title, dpara, mpara}) => {
  return (
    <div>
        <div className='flex flex-row items-center gap-4 lg:flex-col lg:items-center py-4 px-2 lg:px-4'>
            <div className='border w-7 h-7 flex items-center justify-center rounded-full shrink-0'>{id}</div>
            <div className='lg:text-center'>
                <div className='font-semibold'>{title}</div>
                <p className='lg:text-center block lg:hidden'>{mpara}</p>
                <p className='lg:text-center hidden lg:block'>{dpara}</p>
            </div>
        </div>
    </div>
  )
}

export default Rewfeatures