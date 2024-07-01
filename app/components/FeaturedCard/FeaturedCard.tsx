import Image from "next/image";

interface Props {
  title: string;
  image: string;
}

export default function FeaturedCard({ title, image }: Props) {
  return (
    <>
      <div className=" text-center bg-gray-100 p-4 rounded-lg hover:shadow-lg  transition-all duration-300 cursor-pointer hover:scale-105">
        <Image
          src={image}
          className=" mx-auto"
          width={70}
          height={70}
          alt="loading..."
        />

        <h1 className=" text-[20px] mt-[1.4rem] font-[500] text-gray-900">
          {title}
        </h1>
        <p className=" mt-[1rem] text-black opacity-90 text-[15px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
          quasi nesciunt consequatur corporis amet nam quas cum a aliquam minus.
        </p>
        <p className=" mt-[1.4rem] text-[1.5rem] text-red-600 font-[500] cursor-pointer hover:text-red-800">
          Learn More
        </p>
      </div>
    </>
  );
}
