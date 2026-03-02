import React from "react"
import { useParams } from "react-router-dom"

const categoryData = {
  trending: {
    title: "Trending",
    description: "Explore what's popular right now."
  },
  protein: {
    title: "Protein Beverages",
    description: "High-protein drinks for energy and strength."
  },
  "hot-coffee": {
    title: "Hot Coffee",
    description: "Freshly brewed hot coffee selections."
  },
  "cold-coffee": {
    title: "Cold Coffee",
    description: "Chilled coffee beverages to refresh you."
  },
  matcha: {
    title: "Matcha",
    description: "Smooth and creamy matcha creations."
  }
}

const CategoryPage = () => {
  const { category } = useParams()
  const data = categoryData[category]

  if (!data) {
    return (
      <div className="mt-10 text-2xl font-bold">
        Category Not Found
      </div>
    )
  }

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold mb-4">
        {data.title}
      </h1>

      <p className="text-gray-600 text-lg">
        {data.description}
      </p>
    </div>
  )
}

export default CategoryPage