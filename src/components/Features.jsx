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
    <div className="max-w-7xl mx-auto my-6 flex items-center bg-black text-white">
      {!reverse && (
        <img
          className="w-1/2 object-cover"
          src={image}
          alt={title || "feature image"}
        />
      )}
      <div className="w-1/2 flex flex-col gap-4 px-16 text-center">
        {title && (
          <h2 className="text-2xl font-bold">
            {title}
          </h2>
        )}

        {description && (
          <p>
            {description}
          </p>
        )}

        {linkText && linkTo && (
          <Link
            to={linkTo}
            className="underline font-medium"
          >
            {linkText}
          </Link>
        )}
      </div>
      {reverse && (
        <img
          className="w-1/2 object-cover"
          src={image}
          alt={title || "feature image"}
        />
      )}

    </div>
  )
}

export default Features