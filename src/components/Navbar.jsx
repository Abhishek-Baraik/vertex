import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Button from "./Button";
import HamburgerIcon from "./HamburgerIcon";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path) => {
    return location.pathname === path ? "activebar" : "";
  };

  return (
    <header
      className={`main-header relative z-[10] h-[60px] sm:h-[100px] bg-white flex justify-between gap-2 paddings shadow-md ${
        scrolled ? "sticky top-0 shadow-lg " : ""
      }`}
    >
      <div className="flex items-center">
        <a href="https://www.vertexexecutiverecruiting.com/">
          <img src="logo.png" className="w-[150px] sm:w-[300px]" alt="" />
        </a>
      </div>
      <ul className={`sm:flex gap-6 font-normal items-center ${menuOpen ? "absolute left-0 w-[100vh] bg-white" : "hidden"}`}>
        <Link to="/" className={isActive("/")}>
          <li className="navlinks cursor-pointer">Home</li>
        </Link>
        <Link to="/team" className={isActive("/team")}>
          <li className="navlinks cursor-pointer">Team</li>
        </Link>
        <Link to="/about" className={isActive("/about")}>
          <li className="navlinks cursor-pointer">About</li>
        </Link>
        <Link to="/employers" className={isActive("/employers")}>
          <li className="navlinks cursor-pointer">Employers</li>
        </Link>
        <Link to="/candidates" className={isActive("/candidates")}>
          <li className="navlinks cursor-pointer">Candidates</li>
        </Link>
        <Link to="/services" className={isActive("/services")}>
          <li className="navlinks cursor-pointer">Services</li>
        </Link>
        <Link to="/faqs" className={isActive("/faqs")}>
          <li className="navlinks cursor-pointer">FAQS</li>
        </Link>
        <Link to="/blog" className={isActive("/blog")}>
          <li className="navlinks cursor-pointer">Blog</li>
        </Link>
        <Link to="/contact" className={isActive("/contact")}>
          <li className="navlinks cursor-pointer">Contact</li>
        </Link>
      </ul>
      <div className="hidden sm:flex items-center ml-4">
        <Link to={"/contact"}>
        <Button text="Get Started" backgroundColor="#1A76D1" textColor="white" />
        </Link>
      </div>
      <div className="flex items-center sm:hidden">
        <HamburgerIcon onClick={toggleMenu} />
      </div>
    </header>
  );
};

export default Navbar;
