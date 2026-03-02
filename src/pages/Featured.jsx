import React from "react"
import BerryMatcha from "../assets/berry-matcha.png"
import IcedMatcha from "../assets/iced-matcha.png"

const Featured = () => {
  return (
    <div className="mt-10">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800">
          Make the moment delicious
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        <div className="bg-[#f1ece4]">
          <img src={BerryMatcha} alt="" className="w-full object-cover" />
          <div className="text-center px-6 py-10">
            <h2 className="text-2xl font-bold mb-4">
              New Iced Double Berry Matcha
            </h2>
            <button className="border px-6 py-2 rounded-full">
              Order now
            </button>
          </div>
        </div>

        <div className="bg-[#f1ece4]">
          <img src={IcedMatcha} alt="" className="w-full object-cover" />
          <div className="text-center px-6 py-10">
            <h2 className="text-2xl font-bold mb-4">
              New Iced Brown Sugar Matcha
            </h2>
            <button className="border px-6 py-2 rounded-full">
              Order now
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Featured