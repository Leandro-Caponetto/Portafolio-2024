/** @format */

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isDesktop) {
      const mMove = (el) => {
        setPosition({ x: el.clientX, y: el.clientY });
      };

      const handleMouseOver = () => {
        setHovered(true);
      };

      const handleMouseOut = () => {
        setHovered(false);
      };

      const handleMouseLeave = () => {
        setHidden(true);
      };

      const handleMouseEnter = () => {
        setHidden(false);
      };

      document.addEventListener("mousemove", mMove);
      document
        .querySelectorAll("a, button, img, span, .accordion-bar")
        .forEach((element) => {
          element.addEventListener("mouseover", handleMouseOver);
          element.addEventListener("mouseout", handleMouseOut);
        });

      document.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("mouseenter", handleMouseEnter);

      return () => {
        document.removeEventListener("mousemove", mMove);
        document
          .querySelectorAll("a, button, img, span, .accordion-bar")
          .forEach((element) => {
            element.removeEventListener("mouseover", handleMouseOver);
            element.removeEventListener("mouseout", handleMouseOut);
          });

        document.removeEventListener("mouseleave", handleMouseLeave);
        document.removeEventListener("mouseenter", handleMouseEnter);
      };
    }
  }, [isDesktop]);

  if (!isDesktop) {
    return null;
  }

  return (
    <div
      className={`fixed z-[9999] pointer-events-none ${hidden ? "hidden" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        color: hovered ? "#fff" : "#b55053",
      }}
    >
      <FaArrowUp size={26} style={{ transform: "rotate(-15deg)" }} />
    </div>
  );
};

export default Cursor;
