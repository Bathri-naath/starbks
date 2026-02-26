import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div>
        <div className='w-full px-8 bg-gray-300'>
            <div className='flex items-center justify-between'>
                <Link to='/'>
                <img className='w-auto h-32' src={Logo} alt="Starbucks Coffee" /></Link>
                <div className='flex items-center gap-4 px-3'>
                   <Link to = '/menu'>Menu</Link>
                    <Link to='/rewards'>Rewards</Link>
                    <Link to='/giftcards'>Gift Cards</Link>
                </div>
                <div className='flex items-center gap-4 ml-auto'>
                    <Link to = '/signin'>Sign in</Link>
                    <Link to='/joinnow'>Join now</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar