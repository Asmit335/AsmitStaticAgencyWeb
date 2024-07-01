import FeaturedCard from "../FeaturedCard/FeaturedCard";

interface Props {
  headingMini: string;
  headingPrimary: string;
}

const featuresCardItem = [
  { title: "Join Our Newsletter", image: "/icon1.png" },
  { title: "Exclusive Offers", image: "/icon2.png" },
  { title: "Latest Updates", image: "/icon3.png" },
  { title: "Special Discounts", image: "/icon4.png" },
  { title: "Stay Informed", image: "/icon5.png" },
  { title: "New Features", image: "/icon1.png" },
];

export default function SectionHeading({ headingMini, headingPrimary }: Props) {
  return (
    <>
      <div className="text-center p-4 md:p-8">
        <p className="text-blue-900 text-sm md:text-lg">{headingMini}</p>
        <p className="text-blue-900 text-xl md:text-4xl mt-2 font-bold">
          {headingPrimary}
        </p>
        <div className="pt-10 w-full md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuresCardItem.map((card, index) => (
            <div
              key={index}
              className="hover:scale-105 transition-transform duration-300"
            >
              <div
                data-aos="zoom-in"
                data-aos-delay="500"
                data-aos-anchor-placement="top-center"
              >
                <FeaturedCard title={card.title} image={card.image} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
