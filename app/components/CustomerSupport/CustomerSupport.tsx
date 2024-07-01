import { CheckIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const customerFeature = [
  "24/7 Availability",
  "Multilingual Support",
  "Personalized Assistance",
  "Comprehensive Solutions",
];
export default function CustomerSupport() {
  return (
    <div className="pt-20 pb-12">
      <div className="w-11/12 md:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div
          className="order-2 lg:order-1"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-anchor-placement="top-center"
        >
          <Image
            src="/support.jpg"
            width={1000}
            height={1000}
            alt="Support Image"
            className="rounded-lg"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl text-black font-bold leading-tight mb-6"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-anchor-placement="top-center"
          >
            Dedicated Customer Support for Your Business Needs
          </h1>
          <p
            className="mb-6 text-gray-800 md:text-lg sm:text-base"
            data-aos="zoom-in-down"
            data-aos-delay="300"
            data-aos-anchor-placement="top-center"
          >
            Our customer support team is here to ensure your business operates
            smoothly. From troubleshooting to guidance, we provide the expertise
            and assistance you need to keep your operations running seamlessly.
          </p>
          {customerFeature.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center mb-4 space-x-3"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-anchor-placement="top-center"
            >
              <CheckIcon className="w-6 h-6 text-red-600" />
              <p className="text-lg text-black font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
