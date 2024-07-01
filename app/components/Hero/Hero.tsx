import Image from "next/image";
import ButtonBlue from "../Button/ButtonBlue";
import Buttonred from "../Button/Buttonred";

export default function Hero() {
  return (
    <div className="h-[70vh] w-[80%] mx-auto md:h-[75vh] lg:h-[88vh] flex items-center justify-center px-10 md:px-8">
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-[27px] md:text-[35px] lg:text-[45px] mb-4 font-bold text-gray-900 leading-tight md:leading-[4rem]">
          Exploring the path to cultivate the business Environment!
        </h1>
        <p className="text-[14px] md:text-[20px] mb-6 text-gray-800 opacity-90 font-[400]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          laboriosam delectus sit cupiditate impedit voluptatum debitis illo, et
          enim fuga.
        </p>
        <div className="flex justify-center lg:justify-start space-x-4 md:space-x-6">
          <ButtonBlue text="Get Started" />
          <Buttonred text="Explore Features" />
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2">
        <Image src="/hero.svg" width={750} height={750} alt="Hero Image" />
      </div>
    </div>
  );
}
