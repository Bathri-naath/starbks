import React from "react"
import { Link, Outlet, useLocation } from "react-router-dom"

import Trending from "../assets/matcha.png"
import Protein from "../assets/cmlprot.png"
import HotCoffee from "../assets/hotcoffee.png"
import ColdCoffee from "../assets/coldcoffee.png"
import Matcha from "../assets/matcha.png"

const Menu = () => {

  const location = useLocation()
  const isBaseMenu = location.pathname === "/menu"

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8">

      {/* Sticky Tabs */}
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

      {/* Render Nested Pages */}
      {!isBaseMenu && <Outlet />}

      {/* Default Menu Layout */}
      {isBaseMenu && (
        <div className="flex flex-col lg:flex-row gap-12 mt-10">

          {/* Sidebar */}
          <div className="hidden lg:block w-64 sticky top-20 h-fit">

            <h2 className="font-bold mb-4">Fan Favorites</h2>
            <Link to="trending" className="block text-gray-600 mb-8 hover:text-black">
              Trending
            </Link>

            <h2 className="font-bold mb-4">Drinks</h2>

            <div className="flex flex-col gap-4 text-gray-600">
              <Link to="protein" className="hover:text-black">
                Protein Beverages
              </Link>
              <Link to="hot-coffee" className="hover:text-black">
                Hot Coffee
              </Link>
              <Link to="cold-coffee" className="hover:text-black">
                Cold Coffee
              </Link>
              <Link to="matcha" className="hover:text-black">
                Matcha
              </Link>
            </div>

          </div>

          {/* Right Content */}
          <div className="flex-1">

            <h1 className="text-3xl font-bold mb-8">
              Menu
            </h1>

            {/* Fan Favorites */}
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

              <Link to="protein" className="flex items-center gap-6 hover:opacity-80">
                <img
                  src={Protein}
                  alt="Protein"
                  className="w-28 h-28 rounded-full p-3"
                />
                <span className="text-xl">Protein Beverages</span>
              </Link>

              <Link to="hot-coffee" className="flex items-center gap-6 hover:opacity-80">
                <img
                  src={HotCoffee}
                  alt="Hot Coffee"
                  className="w-28 h-28 rounded-full p-3"
                />
                <span className="text-xl">Hot Coffee</span>
              </Link>

              <Link to="cold-coffee" className="flex items-center gap-6 hover:opacity-80">
                <img
                  src={ColdCoffee}
                  alt="Cold Coffee"
                  className="w-28 h-28 rounded-full p-3"
                />
                <span className="text-xl">Cold Coffee</span>
              </Link>

              <Link to="matcha" className="flex items-center gap-6 hover:opacity-80">
                <img
                  src={Matcha}
                  alt="Matcha"
                  className="w-28 h-28 rounded-full p-3"
                />
                <span className="text-xl">Matcha</span>
              </Link>

            </div>

          </div>

        </div>
      )}

    </div>
  )
}

export default Menu