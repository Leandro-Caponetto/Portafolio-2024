/** @format */

import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../context/Language";
import Gif from "../assets/imgs/gif2.gif";

const HomeView = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { isEnglish } = useLanguage();

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      const typingAnimation = document.querySelector(".typing-animation");
      if (typingAnimation) {
        const timer = setTimeout(() => {
          typingAnimation.classList.add("write-animation");
        }, 200);
        return () => clearTimeout(timer);
      }
    }
  }, [inView]);

  return (
    <section
      id="home"
      ref={ref}
      className="bg-black text-white py-20 flex flex-col md:flex-row h-screen"
    >
      <div
        className={`container p-8 flex justify-center items-center w-full ${
          isVisible ? "visible" : ""
        } md:w-1/2`}
      >
        <div>
          <div className="relative">
            <h1 className="text-4xl sm:text-5xl font-bold matias">
              Desarrollador Web
            </h1>
            <div className="absolute hello rounded animate-bounce">
              {isEnglish ? "Welcome!" : "¡Bienvenido!"}
            </div>
          </div>
          <h2 className="text-xl md:text-3xl mt-4 typing-animation">
            Full Stack + de 4 años de experiencia
          </h2>
          <p className="text-md md:text-lg mt-4">
            {isEnglish
              ? "Let's create something together!"
              : "¡Creemos algo juntos!"}
          </p>

          <div className="flex mt-4 icon-container">
            <a
              href="#about"
              className="border rounded-full font-bold py-2 w-full text-center mr-4 inline-block relative"
            >
              {isEnglish ? "About me" : "Sobre mí"}
              <FaArrowUp size={26} className="arrow-animation" />
            </a>
            <a
              href="https://github.com/Leandro-Caponetto"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 mt-2"
            >
              <FaGithub size={26} />
            </a>
            <a
              href="https://www.linkedin.com/in/leandro-caponetto-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 mt-2"
            >
              <FaLinkedin size={26} />
            </a>
            <a
              href="mailto:caponettopeppers@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <FaEnvelope size={26} />
            </a>
          </div>
        </div>
      </div>

      <div
        className={`w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0 container2 ${
          isVisible ? "visible" : ""
        }`}
      >
        <img src={Gif} alt="Home Gif" />
      </div>
    </section>
  );
};

export default HomeView;
