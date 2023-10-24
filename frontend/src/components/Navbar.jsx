import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "/vite.svg";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition ">
        <ul className="text-center text-xl p-20">
          <Link spy="true" smooth="true" to="home">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded ">
              Home
            </li>
          </Link>
          <Link spy="true" smooth="true" to="about">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded ">
              About
            </li>
          </Link>
          {/* <Link spy="true" smooth="true" to="services">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded ">
              Services
            </li>
          </Link> */}
          <Link spy="true" smooth="true" to="predict">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded ">
              Predict
            </li>
          </Link>
          <Link spy="true" smooth="true" to="contact">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded ">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">
            <img className="w-12 cursor-pointer" src={logo} alt="logo" />
            <Link spy="true" smooth="true" to="Home"></Link>
          </span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text=[18px]">
              <Link spy="true" smooth="true" to="home">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer ">
                  Home
                </li>
              </Link>
              <Link spy="true" smooth="true" to="about">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer ">
                  About
                </li>
              </Link>
              {/* <Link spy="true" smooth="true" to="Services">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer ">
                  Services
                </li>
              </Link> */}
              <Link spy="true" smooth="true" to="predict">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer ">
                  Predict
                </li>
              </Link>
              <Link spy="true" smooth="true" to="Contact">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer ">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
