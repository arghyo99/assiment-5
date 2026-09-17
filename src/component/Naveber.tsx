import { useState } from "react"
import logo from "../assets/logo-text.png"

const Naveber = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">


        <button
          className="md:hidden text-gray-600 flex flex-col gap-1.5 w-6"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block h-0.5 bg-gray-600 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-0.5 bg-gray-600 transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block h-0.5 bg-gray-600 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

     
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <img src={logo} alt="logo" className="h-8" />
        </div>


        <div className="hidden md:flex">
          <ul className="flex gap-6 text-[#475569]">
            <li className="text-[#DB2777]"><a href="#">Home</a></li>
            <li><a href="#">Technologies</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>


        <div className="flex items-center gap-2">
          <button className="hidden md:block text-[#334155]">Sign In</button>
          <button className="bg-[#D91B7E] text-white px-4 py-1.5 rounded-full font-medium text-sm md:text-base md:px-5 md:py-2">
            Sign Up
          </button>
        </div>

      </div>


      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4 text-[#475569]">
            <li className="text-[#DB2777] font-medium"><a href="#">Home</a></li>
            <li><a href="#">Technologies</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <hr className="border-gray-100" />
          <button className="text-[#334155] text-left">Sign In</button>
        </div>
      )}
    </div>
  )
}

export default Naveber