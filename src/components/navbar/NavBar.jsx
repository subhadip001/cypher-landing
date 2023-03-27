import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../../assets/cypher-trans.png";

const NavBar = () => {
  const location = useLocation();
  return (
    <>
      <div className="flex items-center justify-center h-[100px] sticky z-50 top-0">
        <header className="flex justify-between items-center w-[85%] h-full">
          <div className="brand flex justify-between items-center text-white gap-3">
            <img className="block w-[3rem] h-[3rem]" src={logo} alt="cypher" />
            <Link to="/">
              <span className="text-2xl font-semibold">CYPHER</span>
            </Link>
          </div>
          <nav className="nav text-white flex items-center gap-14">
            <Link
              className={location.pathname === "/about" && "font-semibold"}
              to="/about"
            >
              <span> About</span>
            </Link>
            <a
              href="#contact"
              className={location.pathname === "/#contact" && "font-semibold"}
            >
              <span> Contact Us</span>
            </a>
          </nav>
        </header>
      </div>
    </>
  );
};

export default NavBar;
