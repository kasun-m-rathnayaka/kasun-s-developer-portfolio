import React from "react";
import { FloatingNav } from "./ui/floating-navbar";

const NavBar = () => {
  const navItems = [
    {
      name: "home",
      link: "/home",
    },
    {
      name: "projects",
      link: "projects",
    },
    {
      name: "testimonials",
      link: "testimonials",
    },
    {
      name: "contact",
      link: "contact",
    },
  ];
  return (
    <nav>
      <FloatingNav navItems={navItems}/>
    </nav>
  );
};

export default NavBar;
