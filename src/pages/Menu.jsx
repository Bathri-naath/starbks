import React from "react"
import { Link, Outlet, useLocation } from "react-router-dom"

import Trending from "../assets/matcha.png"
import Protein from "../assets/cmlprot.png"
import HotCoffee from "../assets/hotcoffee.png"
import ColdCoffee from "../assets/coldcoffee.png"
import Matcha from "../assets/matcha.png"
import MenuItems from "../components/MenuItems"

const Menu = () => {

  const location = useLocation()
  const isBaseMenu = location.pathname === "/menu"
  const drinks = [
    {title: "Protein Beverages", image : Protein, path: "protein"},
    {title: "Hot Coffee", image : HotCoffee, path: "hot-coffee"},
    {title: "Cold Coffee", image : ColdCoffee, path: "cold-coffee"},
    {title: "Matcha", image : Matcha, path: "match"},
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="sticky top-0 bg-white z-40 border-b">
        <div className="flex gap-6 py-4 text-sm font-medium max-w-7xl mx-auto">
          <Link
            to="/menu"
            className={isBaseMenu ? "border-b-2 border-black pb-1" : ""}
          >
            Menu
          </Link>
          <Link
            to="featured"
            className={
              location.pathname.includes("featured")
                ? "border-b-2 border-black pb-1"
                : ""
            }
          >
            Featured
          </Link>

        </div>
      </div>
      {!isBaseMenu && <Outlet />}
      {isBaseMenu && (
        <div className="flex flex-col lg:flex-row gap-12 mt-10">
          <div className="hidden lg:block w-64 sticky top-20 h-fit">

            <h2 className="font-bold mb-4">Fan Favorites</h2>
            <Link to="trending" className="block text-gray-600 mb-8 hover:text-black">
              Trending
            </Link>

            <h2 className="font-bold mb-4">Drinks</h2>

            <div className="flex flex-col gap-4 text-gray-600">
              {drinks.map((drink)=> (
                <MenuItems 
                key={drink.path}
                to={drink.path}
                image={drink.image}
                title={drink.title}
                sidebar
                />
              ))}
            </div>

          </div>
          <div className="flex-1">

            <h1 className="text-3xl font-bold mb-8">
              Menu
            </h1>
            <h2 className="text-2xl font-bold mb-4">
              Fan Favorites
            </h2>

            <hr className="mb-8" />

            <Link to="trending" className="flex items-center gap-8 mb-16 hover:opacity-80">
              <img
                src={Trending}
                alt="Trending"
                className="w-28 h-28 rounded-full p-3"
              />
              <span className="text-xl">Trending</span>
            </Link>

            {/* Drinks */}
            <h2 className="text-2xl font-bold mb-4">
              Drinks
            </h2>

            <hr className="mb-12" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-16 gap-x-20">
                {drinks.map((drink)=> (
                <MenuItems 
                key={drink.path}
                to={drink.path}
                image={drink.image}
                title={drink.title}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default Menu