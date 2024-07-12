import Image from "next/image";

export default function Help() {
  return (
    <div className="pt-20 pb-12 bg-gray-50">
      <div className="w-11/12 md:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div
          className="order-1 lg:order-2"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <Image
            src="/supportteam.jpg"
            width={1000}
            height={1000}
            alt="Support Team"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl text-black font-bold leading-tight mb-6"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Do you need Help? Our support team&apos;s ready to help!
          </h1>
          <p
            className="mb-6 text-gray-800 md:text-lg sm:text-base"
            data-aos="zoom-in-right"
            data-aos-delay="600"
            data-aos-anchor-placement="top-center"
          >
            Our dedicated support team works around the clock to ensure your
            business stays operational. Whether it&apos;s resolving technical
            issues or offering strategic advice, we are here to provide the
            support you need, when you need it.
          </p>
          <p
            className="mb-6 text-gray-800 md:text-lg sm:text-base"
            data-aos="zoom-in-left"
            data-aos-delay="800"
            data-aos-anchor-placement="top-center"
          >
            With a wealth of experience in diverse industries, our team is
            equipped to handle any challenge and help your business grow. We
            believe in proactive support, anticipating your needs before they
            become problems.
          </p>
        </div>
      </div>
    </div>
  );
}
