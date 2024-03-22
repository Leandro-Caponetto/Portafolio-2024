/** @format */

import React, { useState, useRef, useEffect } from "react";
import {
  FaTimes,
  FaHome,
  FaUser,
  FaClipboardList,
  FaTools,
  FaPhoneAlt,
  FaBars,
} from "react-icons/fa";
import { useLanguage } from "../context/Language";
import Logo from "../assets/imgs/leo2.png";
import Arg from "../assets/imgs/arg.png";
import Eeuu from "../assets/imgs/eeuu.png";

const Navbar = () => {
  const { isEnglish, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`bg-black p-2 flex justify-between items-center fixed w-full z-50`}
    >
      <div className="flex items-center">
        <a href="# ">
          <img
            src={Logo}
            alt="Matías Montone's personal logo"
            className="h-16 ml-2 logo"
          />
        </a>
      </div>
      <div className="hidden lg:flex items-center">
        <a href="#about" className="nav-link text-lg text-white">
          {isEnglish ? "About me" : "Sobre mí"}
        </a>
        <a href="#projects" className="nav-link text-lg text-white">
          {isEnglish ? "Projects" : "Proyectos"}
        </a>
        <a href="#skills" className="nav-link text-lg text-white">
          {isEnglish ? "Skills" : "Habilidades"}
        </a>
        <a href="#contact" className="nav-link text-lg text-white">
          {isEnglish ? "Contact" : "Contacto"}
        </a>
      </div>
      <div className="hidden lg:flex items-center mr-3">
        {isEnglish ? (
          <>
            <span className="text-white text-lg mr-2" onClick={toggleLanguage}>
              ES
            </span>
            <img
              src={Arg}
              alt="Flag Argentina"
              className="h-6 w-10"
              onClick={toggleLanguage}
            />
          </>
        ) : (
          <>
            <span className="text-white text-lg mr-2" onClick={toggleLanguage}>
              ES
            </span>
            <img
              src={Arg}
              alt="Flag Argentina"
              className="h-6 w-10"
              onClick={toggleLanguage}
            />
          </>
        )}
      </div>
      <button
        onClick={toggleMenu}
        className="lg:hidden text-white z-50 nav-link"
      >
        <FaBars className="w-8 h-8" />
      </button>
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={toggleMenu}
        ></div>
      )}
      <div
        ref={menuRef}
        className={`lg:hidden fixed inset-0 bg-black z-50 transform transition-transform ease-in-out duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start p-4 pt-0">
          <div className="flex justify-between items-center w-full">
            <p className="text-lg text-white p-4 pt-6 pb-6 pl-0">
              {isEnglish ? "Menu" : "Menú"}
            </p>
            <span
              className="text-white text-lg mt-1 cursor-pointer"
              onClick={toggleMenu}
            >
              <FaTimes />
            </span>
          </div>
          <a
            href="# "
            className="nav-link text-lg text-white border-b border-white p-6 pl-0 w-full"
            onClick={toggleMenu}
          >
            <FaHome className="inline-block mr-2 mb-1.5" />
            {isEnglish ? "Home" : "Inicio"}
          </a>
          <a
            href="#about"
            className="nav-link text-lg text-white border-b border-white p-6 pl-0 w-full"
            onClick={toggleMenu}
          >
            <FaUser className="inline-block mr-2 mb-1.5" />
            {isEnglish ? "About me" : "Sobre Mí"}
          </a>
          <a
            href="#projects"
            className="nav-link text-lg text-white border-b border-white p-6 pl-0 w-full"
            onClick={toggleMenu}
          >
            <FaClipboardList className="inline-block mr-2 mb-1.5" />
            {isEnglish ? "Projects" : "Proyectos"}
          </a>
          <a
            href="#skills"
            className="nav-link text-lg text-white border-b border-white p-6 pl-0 w-full"
            onClick={toggleMenu}
          >
            <FaTools className="inline-block mr-2 mb-1.5" />
            {isEnglish ? "Skills" : "Habilidades"}
          </a>
          <a
            href="#contact"
            className="nav-link text-lg text-white border-b border-white p-6 pl-0 w-full"
            onClick={toggleMenu}
          >
            <FaPhoneAlt className="inline-block mr-2 mb-1.5" />
            {isEnglish ? "Contact" : "Contacto"}
          </a>
          <div className="flex items-center mt-4">
            <span
              className="text-white cursor-pointer text-lg mr-2"
              onClick={toggleLanguage}
            >
              {isEnglish ? "EN" : "ES"}
            </span>
            <img
              src={isEnglish ? Eeuu : Arg}
              alt={isEnglish ? "Flag USA" : "Flag Argentina"}
              className="h-6 w-10 cursor-pointer"
              onClick={toggleLanguage}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
