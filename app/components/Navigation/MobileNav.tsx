import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

interface Props {
  nav: boolean;
  closeNav: () => void;
}
export default function MobileNav({ nav, closeNav }: Props) {
  const navOpenStyle = nav ? "translate-x-0" : "translate-x-[100%]";
  return (
    <>
      <div
        className={`transform  transition-all ${navOpenStyle} duration-500 fixed top-0 left-0 z-[200] h-[100vh] right-0 bottom-0 bg-slate-800`}
      >
        <XMarkIcon
          onClick={closeNav}
          className=" w-[2rem] h-[2rem] top-[2rem] absolute text-white z-[202] right-[2rem]"
        />
        <ul className=" relative z-[201] space-y-10 flex-col justify-center h-[100%] flex items-center">
          <li className=" cursor-pointer text-[25px] text-red-500  ">
            <Link href="/">Home</Link>
          </li>
          <li className=" cursor-pointer text-[25px] text-white  hover:text-red-500 transition-all duration-200">
            <Link href="/">About</Link>
          </li>
          <li className=" cursor-pointer text-[25px] text-white  hover:text-red-500 transition-all duration-200">
            <Link href="/">Services</Link>
          </li>
          <li className=" cursor-pointer text-[25px] text-white  hover:text-red-500 transition-all duration-200">
            <Link href="/">Customer</Link>
          </li>
          <li className=" cursor-pointer text-[25px] text-white hover:text-red-500 transition-all duration-200">
            <Link href="/">Blog</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
