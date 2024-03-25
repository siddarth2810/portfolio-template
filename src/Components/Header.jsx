/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import { on } from "process";
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "black",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#home"
        style={{
         color: "white",
        }}
      
      >Home</a>
      <a href="#about"   style={{
         color: "white",
        }}>About</a>
      <a href="#portfolio"   style={{
         color: "white",
        }}>Portfolio</a>
      <a href="#footer"   style={{
         color: "white",
        }}>Contact</a>
    </div>
  );
};

export default Header;
