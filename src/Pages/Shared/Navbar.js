import React from "react";
import "./Navbar.css";

const Navbar = () => {
    const menuItems = <>
         <li className="hover:text-[#2D89FF]">
              <a>Home</a>
            </li>
            <li className="hover:text-[#2D89FF]">
              <a>About</a>
            </li>
            <li className="hover:text-[#2D89FF]">
              <a>Deopertments</a>
            </li>
            <li className="hover:text-[#2D89FF]">
              <a>Pages</a>
            </li>
            <li className="hover:text-[#2D89FF]">
              <a>Blog</a>
            </li>
            <li className="hover:text-[#2D89FF]">
              <a>Contact</a>
            </li>
    </>
  return (
    <div class="navbar bg-base-100 containers h-[80px] w-[1366px]">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2  bg-base-100 rounded-box w-52"
          >
           {menuItems}
          </ul>
        </div>
        <p className="text-[#2D89FF] text-2xl font-bold">
          Doc<span className="text-[#642DFF]">mic</span>
        </p>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 btn-text">
           {menuItems}
        </ul>
      </div>
      <div className="btn-degsin w-[170px] ml-10 h-[50px] bg-[#2D89FF]">
        <a className="text-[#FFFFFF] btn-text">Get started</a>
      </div>
    </div>
  );
};

export default Navbar;
