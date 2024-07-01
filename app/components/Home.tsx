import CompanyWho from "./Companywhoworked/CompanyWho";
import CustomerSupport from "./CustomerSupport/CustomerSupport";
import Features from "./Features/Features";
import Help from "./Help/Help";
import Hero from "./Hero/Hero";
import Price from "./Price/Price";

export default function Home() {
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
