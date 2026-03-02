import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='w-full px-8 bg-gray-300'>

      <div className='flex items-center justify-between'>

        {/* Logo */}
        <Link to='/'>
          <img
            className='w-auto h-20 lg:h-32'
            src={Logo}
            alt="Starbucks Coffee"
          />
        </Link>

        {/* Desktop Navigation (UNCHANGED) */}
        <div className='hidden lg:flex items-center gap-4 px-3'>
          <Link to='/menu'>Menu</Link>
          <Link to='/rewards'>Rewards</Link>
          <Link to='/giftcards'>Gift Cards</Link>
        </div>

        <div className='hidden lg:flex items-center gap-4 ml-auto'>
          <Link to='/signin'>Sign in</Link>
          <Link to='/joinnow'>Join now</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className='lg:hidden text-3xl ml-auto'
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className='lg:hidden flex flex-col gap-4 mt-4 pb-6 border-t pt-4'>

          <Link onClick={() => setIsOpen(false)} to='/menu'>
            Menu
          </Link>

          <Link onClick={() => setIsOpen(false)} to='/rewards'>
            Rewards
          </Link>

          <Link onClick={() => setIsOpen(false)} to='/giftcards'>
            Gift Cards
          </Link>

          <hr />

          <Link onClick={() => setIsOpen(false)} to='/signin'>
            Sign in
          </Link>

          <Link onClick={() => setIsOpen(false)} to='/joinnow'>
            Join now
          </Link>

        </div>
      )}

    </div>
  )
}

export default Navbar