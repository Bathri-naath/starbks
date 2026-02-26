import React from 'react'
import { Link } from 'react-router-dom'
import Features from '../components/Features'

import Matcha from '../assets/matcha.png'
import Carapro from '../assets/cmlprot.png'
import Oly from '../assets/oly.png'

const Home = () => {

  const features = [
    {
      image: Matcha,
      title: "Bold new matcha menu",
      description:
        "Meet the matcha edit: delicious matcha made from shade-grown green tea leaves, layered with flavors of banana bread, double berry and Dubai chocolate.",
      linkText: "Order from the matcha menu",
      linkTo: "/menu",
      reverse: false
    },
    {
      image: Carapro,
      title: "Caramel protein is here",
      description:
        "Power up with the new Caramel Protein Latte and Caramel Protein Matcha. Handcrafted with Protein-boosted Milk for up to 31 grams of protein per grande.",
      linkText: "Explore Caramel Protein",
      linkTo: "/rewards",
      reverse: true
    },
    {
      image: Oly,
      description:
        "Starbucks is proud to support Team USA in the Olympic and Paralympic Winter Games Milano Cortina 2026.",
      linkText: "Learn more",
      linkTo: "/about",
      reverse: false
    }
  ]

  return (
    <div className="px-9">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-center gap-6 bg-[#1b3321] text-white px-10 py-16">
        <h1 className="text-3xl font-semibold">
          Its a great day for coffee
        </h1>

        <Link
          to="/menu"
          className="bg-white text-black px-6 py-2 rounded-full font-medium"
        >
          Start now
        </Link>
      </div>
      {features.map((feature, index) => (
        <Features
          key={index}
          image={feature.image}
          title={feature.title}
          description={feature.description}
          linkText={feature.linkText}
          linkTo={feature.linkTo}
          reverse={feature.reverse}
        />
      ))}

    </div>
  )
}

export default Home