import React from 'react'
import { Link } from 'react-router-dom'

const MenuItems = ({ to, image, title, sidebar }) => {
  return (
    <Link
    to={to}
    className={`hover:opacity-80 ${
    sidebar
    ? "block text-gray-600 hover:text-black"
    : "flex items-center gap-6"
    }`}>
        {!sidebar && (
            <img src={image} alt={title} className='w-28 h-28 rounded-full p-3' />
        )}
        <span className={sidebar ?"":'text-xl'}>{title}</span>
    </Link>
  )
}

export default MenuItems