import React from "react";
import { Link } from "react-router-dom";

export const InstuctorNavbar = () => {
  const curentRole = "instructor";
  const navLinks = [
    {
      path: `/${curentRole}/dashboard`,
      value: "Dashboard",
    },
    //   {
    //     path: `/${curentRole}/view-instructor`,
    //     value: "Instructor",
    //   },
    {
      path: `/${curentRole}/view-course`,
      value: "Course",
    },
    {
      path: `/${curentRole}/profile`,
      value: "Profile",
    },
  ];
  return (
    <>
      <nav className="bg-blue-500 text-white">
        <div className="h-14 flex justify-between items-center px-5">
          <h3 className="text-lg">Instructor Panel</h3>
          <ul className="flex gap-3 text-base	">
            {navLinks.map((item, index) => (
              <Link to={item.path} key={index}>
                <li>{item.value}</li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
