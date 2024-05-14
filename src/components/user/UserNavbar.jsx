import { Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/logo-color.png";
import { CartPage } from "./CartPage";

export const UserNavbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const curentRole = "user";
  const navLinks = [
    {
      path: `/${curentRole}/`,
      value: "Home",
    },
    //   {
    //     path: `/${curentRole}/view-instructor`,
    //     value: "Instructor",
    //   },
    {
      path: `/${curentRole}/courses`,
      value: "All Courses",
    },
    {
      path: `/${curentRole}/my-courses`,
      value: "My Courses",
    },
    // {
    //   path: `/${curentRole}/cart`,
    //   value: "Cart",
    // },
    {
      path: `/${curentRole}/profile`,
      value: "Profile",
    },
  ];

  const handleCartOpen = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <>
      <nav className="bg-blue-500 text-white">
        <div className="h-16 flex justify-between items-center px-5">
          {/* <img className="h-96" src= {Logo}/> */}
          <h1 className="text-3xl font-bold	px-5">CourseCrafters</h1>

          <ul className="flex gap-3 text-base	">
            {navLinks.map((item, index) => (
              <Link to={item.path} key={index}>
                <li>{item.value}</li>
              </Link>
            ))}
            <button onClick={() => setCartOpen(!cartOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </button>
          </ul>
        </div>
      </nav>
      {open && <CartPage cartOpen={cartOpen} handleCartOpen={handleCartOpen} />}
    </>
  );
};
