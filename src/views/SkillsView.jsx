/** @format */

import React, { useEffect } from "react";
import { FaArrowRight, FaDesktop, FaDatabase, FaPen } from "react-icons/fa";
import { useLanguage } from "../context/Language";
import HtmlIcon from "../assets/imgs/skills/html5.png";
import CssIcon from "../assets/imgs/skills/css3.png";
import BootstrapIcon from "../assets/imgs/skills/bootstrap.png";
import TailwindIcon from "../assets/imgs/skills/tailwind.png";
import JsIcon from "../assets/imgs/skills/javascript.png";
import VueIcon from "../assets/imgs/skills/vue.png";
import ReactIcon from "../assets/imgs/skills/react.png";
import NodeIcon from "../assets/imgs/skills/node.png";
import ExIcon from "../assets/imgs/skills/express.png";
import MongoIcon from "../assets/imgs/skills/mongodb.png";
import PhpIcon from "../assets/imgs/skills/php.png";
import LaravelIcon from "../assets/imgs/skills/laravel.png";
import MysqlIcon from "../assets/imgs/skills/mysql.png";
import FirebaseIcon from "../assets/imgs/skills/firebase.png";
import PsIcon from "../assets/imgs/skills/photoshop.png";
import IllIcon from "../assets/imgs/skills/illustrator.png";
import GithubIcon from "../assets/imgs/skills/github.png";
import WordpressIcon from "../assets/imgs/skills/wordpress.png";

const skillsData = [
  { name: "HTML5", icon: HtmlIcon },
  { name: "CSS3", icon: CssIcon },
  { name: "Bootstrap", icon: BootstrapIcon },
  { name: "Tailwind", icon: TailwindIcon },
  { name: "JavaScript", icon: JsIcon },
  { name: "Vue.js", icon: VueIcon },
  { name: "React", icon: ReactIcon },
  { name: "Node.js", icon: NodeIcon },
  { name: "Express.js", icon: ExIcon },
  { name: "MongoDB", icon: MongoIcon },
  { name: "PHP", icon: PhpIcon },
  { name: "Laravel", icon: LaravelIcon },
  { name: "MySQL", icon: MysqlIcon },
  { name: "Firebase", icon: FirebaseIcon },
  { name: "GitHub", icon: GithubIcon },
  { name: "Photoshop", icon: PsIcon },
  { name: "Illustrator", icon: IllIcon },
  { name: "WordPress", icon: WordpressIcon },
];

const SkillsView = () => {
  const { isEnglish } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const skillElements = document.querySelectorAll(".skill");
      skillElements.forEach((skill) => {
        const rect = skill.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const visiblePercent = (windowHeight - rect.top) / windowHeight;
        if (visiblePercent >= 0.3) {
          skill.classList.add("in-viewport");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const frontEndSkills = skillsData.slice(0, 7).map((skill, index) => (
    <div
      key={index}
      className="border border-gray-700 rounded-lg mb-4 sm:mr-4 p-4 sm:p-8 w-24 sm:w-32 flex flex-col items-center skill skill-hover"
      style={{
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.7)",
        background:
          "linear-gradient(to bottom right, rgba(145,145,145,1) 0%, rgba(255,255,255,1) 100%)",
      }}
    >
      <img
        src={skill.icon}
        alt={skill.name}
        className="h-16 object-contain mb-4"
      />
      <span className="sm:text-lg">{skill.name}</span>
    </div>
  ));

  const backEndSkills = skillsData.slice(7, 14).map((skill, index) => (
    <div
      key={index}
      className="border border-gray-700 rounded-lg mb-4 sm:mr-4 p-4 sm:p-8 w-24 sm:w-32 flex flex-col items-center skill skill-hover"
      style={{
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.7)",
        background:
          "linear-gradient(to bottom right, rgba(145,145,145,1) 0%, rgba(255,255,255,1) 100%)",
      }}
    >
      <img
        src={skill.icon}
        alt={skill.name}
        className="h-16 object-contain mb-4"
      />
      <span className="sm:text-lg">{skill.name}</span>
    </div>
  ));

  const otherSkills = skillsData.slice(14).map((skill, index) => (
    <div
      key={index}
      className="border border-gray-700 rounded-lg mb-4 sm:mr-4 p-4 sm:p-8 w-24 sm:w-32 flex flex-col items-center skill skill-hover"
      style={{
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.7)",
        background:
          "linear-gradient(to bottom right, rgba(145,145,145,1) 0%, rgba(255,255,255,1) 100%)",
      }}
    >
      <img
        src={skill.icon}
        alt={skill.name}
        className="h-16 object-contain mb-4"
      />
      <span className="sm:text-lg">{skill.name}</span>
    </div>
  ));

  return (
    <section id="skills" className="p-8 lg:p-20 about">
      <div className="flex items-center accordion">
        <FaArrowRight size={36} className="mr-2 arrow-right" />
        <h2 className="text-3xl sm:text-5xl font-bold">
          {isEnglish ? "Skills" : "Habilidades"}
        </h2>
      </div>
      <p className="text-lg sm:text-2xl text-gray-500 flex items-center mt-2 mb-4 skill">
        Front-end <FaDesktop className="ml-3 text-blue-500" />
      </p>
      <div className="responsive-mobile flex flex-wrap justify-between sm:justify-start">
        {frontEndSkills}
      </div>
      <p className="text-lg sm:text-2xl text-gray-500 flex items-center mt-2 mb-4 skill">
        Back-end <FaDatabase className="ml-3 text-blue-500" />
      </p>
      <div className="responsive-mobile flex flex-wrap justify-between sm:justify-start">
        {backEndSkills}
      </div>
      <p className="text-lg sm:text-2xl text-gray-500 flex items-center mt-2 mb-4 skill">
        {isEnglish ? "Others" : "Otras"}{" "}
        <FaPen className="ml-3 text-blue-500" />
      </p>
      <div className="responsive-mobile flex flex-wrap justify-between sm:justify-start">
        {otherSkills}
      </div>
    </section>
  );
};

export default SkillsView;
