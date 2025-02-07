import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaHome } from "react-icons/fa";
import { GiLoveSong } from "react-icons/gi";
import { BiCameraMovie } from "react-icons/bi";
import { PiCalendarHeartFill } from "react-icons/pi";
import { GiLoveLetter } from "react-icons/gi"; 
import { LuMessageCircleHeart } from "react-icons/lu";
import "../styling/Nav.css"
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/home">
            <FaHome className="icon" />
          </Link>
        </li>
        <li>
          <Link to="/songs">
            <GiLoveSong className="icon" />
          </Link>
        </li>
        <li>
          <Link to="/memories">
            <PiCalendarHeartFill className="icon" />
          </Link>
        </li>
        <li>
          <Link to="/favs">
            <BiCameraMovie className="icon" />
          </Link>
        </li>
        <li>
          <Link to="/reasons">
            <GiLoveLetter className="icon" />
          </Link>
        </li>
        <li>
          <Link to="/yes">
            <LuMessageCircleHeart className="icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
