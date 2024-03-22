/** @format */

import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaFilePdf,
} from "react-icons/fa";
import { useLanguage } from "../context/Language";

const Footer = () => {
  const { isEnglish } = useLanguage();
  const [cvFile] = useState({
    en: `${process.env.PUBLIC_URL}/CV-EN.pdf`,
    es: `${process.env.PUBLIC_URL}/CV-ES.pdf`,
  });

  return (
    <footer className="p-2 pl-8 pr-8 lg:p-6 lg:pl-20 lg:pr-20 about">
      {/* PC */}
      <div className="hidden lg:flex justify-between">
        <div className="btn-container">
          <a
            href={cvFile[isEnglish ? "en" : "es"]}
            target="_blank"
            rel="noreferrer"
            className="border border-black rounded-full font-bold inline-block p-1 pl-3 pr-3 mr-1"
          >
            <FaFilePdf className="inline-block mr-2 mb-1" />
            {isEnglish ? "Download resume" : "Descargar currículum"}
          </a>
        </div>

        <div className={`text-2xl font-bold ${isEnglish ? "mr-0" : "mr-7"}`}>
          Leandro Caponetto &copy; 2024
        </div>

        <div className="flex icon-container2">
          <a
            href="https://wa.me/+5491161691727"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 text-4xl"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://github.com/Leandro-Caponetto"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 text-4xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/leandro-caponetto-developer/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 text-4xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:caponettopeppers@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* MOBILE */}
      <div className="flex lg:hidden flex-col items-center">
        <div className="text-xl md:text-2xl font-bold mb-3.5">
          Leandro Caponetto &copy; 2024
        </div>
        <hr className="w-full border-b-1 border-black" />

        <div className="flex justify-between w-full mt-5 mb-2">
          <div className="btn-container">
            <a
              href={cvFile[isEnglish ? "en" : "es"]}
              target="_blank"
              rel="noreferrer"
              className="border border-black rounded-full font-bold inline-block p-0.5 pl-2 pr-2"
            >
              <FaFilePdf className="inline-block mr-2 mb-1" />
              {isEnglish ? "Download CV" : "Descargar CV"}
            </a>
          </div>

          <div className="flex icon-container2">
            <a
              href="https://wa.me/+5491161691727"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2 text-3xl"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://github.com/Leandro-Caponetto"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2 text-3xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/leandro-caponetto-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2 text-3xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:caponettopeppers@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
