import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { FaBars } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

const Nav = () => {
  const [isOpen, setisOpen] = useState(false);

  // isOpen - false , 1st click - true , 2nd - false
  // false opposite = notEqualto (!isOpen)

  const handleClick = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="nav-logo"> LOGO</h1>

          {/* <div className='navbar-links active'></div> */}

          <div className={`navbar-links ${isOpen ? "active" : ""}`}>
            <Link className="nav-link" onClick={handleClick} to="/">
              Home
            </Link>
            <Link className="nav-link" onClick={handleClick} to="/todo">
              Todo
            </Link>
            <Link className="nav-link" onClick={handleClick} to="/signup">
              Sign up
            </Link>
            <Link className="nav-link" onClick={handleClick} to="/signin">
              Sign in
            </Link>
          </div>

          <div className="navbar-toggle" onClick={handleClick}>
            {" "}
            {isOpen ? (
              <IoIosCloseCircle style={{ fontSize: "35px" }} />
            ) : (
              <FaBars style={{ fontSize: "35px" }} />
            )}{" "}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
