import React from 'react'
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi'

const NavLinks = [
    {
        id:"1",
        name:"HOME",
        link:"/#",
    },
     {
        id:"2",
        name:"CARS",
        link:"/#cars",
    },
     {
        id:"3",
        name:"ABOUT",
        link:"/#about",
    },
     {
        id:"4",
        name:"BOOKING",
        link:"/#booking",
    },
    ]


export const Navbar = ({ theme, setTheme }) => {
  return (
    <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300">
      <div className="container">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div>
            <h1 className="text-3xl font-bold font-serif">Car Rental</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              {NavLinks.map((data) => (
                <li key={data.id} className="py-4">
                  <a
                    href={data.link}
                    className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Theme Toggle */}
          <div>
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl cursor-pointer"
              />
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};
