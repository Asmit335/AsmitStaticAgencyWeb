import Link from "next/link";
import ButtonBlue from "../Button/ButtonBlue";
import { Bars3BottomRightIcon } from "@heroicons/react/16/solid";

interface Props {
  openNav: () => void;
}

export default function Nav({ openNav }: Props) {
  return (
    <>
      <div className=" h-[12vh] bg-white shadow-md">
        <div className=" w-[85%] flex items-center justify-between mx-auto h-[12vh]">
          <h1 className=" text-[16px] md:text-[25px] font-bold text-slate-800">
            <span className=" text-red-600 text-[27px] md:text-[40px]">A</span>
            smit.
          </h1>
          <ul className=" hidden lg:flex items-center space-x-10">
            <li className=" cursor-pointer text-[17px] text-red-500">
              <Link href="/">Home</Link>
            </li>
            <li className=" cursor-pointer text-[17px]  hover:text-red-500 transition-all duration-200">
              <Link href="/">About</Link>
            </li>
            <li className=" cursor-pointer text-[17px]  hover:text-red-500 transition-all duration-200">
              <Link href="/">Services</Link>
            </li>
            <li className=" cursor-pointer text-[17px]  hover:text-red-500 transition-all duration-200">
              <Link href="/">Customer</Link>
            </li>
            <li className=" cursor-pointer text-[17px] hover:text-red-500 transition-all duration-200">
              <Link href="/">Blog</Link>
            </li>
          </ul>
          <div className=" flex items-center space-x-10">
            <ButtonBlue text="Login" />
            <ButtonBlue text="SignUp" />
            <Bars3BottomRightIcon
              onClick={openNav}
              className=" w-[1.5rem] lg:hidden h-[1.5rem] text-slate-900 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}
