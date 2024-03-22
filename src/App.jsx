/** @format */

import React from "react";
import "./assets/css/style.css";
import { LanguageProvider } from "./context/Language";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import HomeView from "./views/HomeView";
import AboutMeView from "./views/AboutMeView";
import ProjectsView from "./views/ProjectsView";
import SkillsView from "./views/SkillsView";
import ContactView from "./views/ContactView";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <LanguageProvider>
        <Cursor />
        <Navbar />
        <HomeView />
        <AboutMeView />
        <ProjectsView />
        <SkillsView />
        <ContactView />
        <Footer />
      </LanguageProvider>
    </div>
  );
}

export default App;
