import React from 'react'
import { Link } from 'react-router-dom'

const Features = ({
  image,
  title,
  description,
  linkText,
  linkTo,
  reverse = false
}) => {
  return (
    <div className="max-w-7xl mx-auto my-8 bg-black text-white">

      <div className="flex flex-col lg:flex-row items-center">
        <img
          src={image}
          alt={title || "feature"}
          className={`w-full lg:w-1/2 object-cover ${
            reverse ? "lg:order-2" : ""
          }`}
        />
        <div className="w-full lg:w-1/2 flex flex-col gap-4 px-6 lg:px-16 py-10 text-center">
          {title && (
            <h2 className="text-xl lg:text-2xl font-bold">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-sm lg:text-base leading-relaxed">
              {description}
            </p>
          )}
          {linkText && linkTo && (
            <Link
              to={linkTo}
              className="underline font-medium hover:opacity-80 transition"
            >
              {linkText}
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
export default Features