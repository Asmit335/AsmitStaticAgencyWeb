"use client";
import { useEffect } from "react";
import CompanyWho from "./Companywhoworked/CompanyWho";
import CustomerSupport from "./CustomerSupport/CustomerSupport";
import Features from "./Features/Features";
import Help from "./Help/Help";
import Hero from "./Hero/Hero";
import Price from "./Price/Price";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div>
      <Hero />
      <Features />
      <CustomerSupport />
      <Price />
      <Help />
      <CompanyWho />
    </div>
  );
}
