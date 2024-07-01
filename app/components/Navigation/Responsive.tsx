"use client";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useState } from "react";

export default function Responsive() {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => {
    setShowNav(true);
  };
  const closeNavHandler = () => {
    setShowNav(false);
  };
  return (
    <div>
      <Nav openNav={showNavHandler} />
      <MobileNav nav={showNav} closeNav={closeNavHandler} />
    </div>
  );
}
