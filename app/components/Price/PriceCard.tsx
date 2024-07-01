import ButtonBlue from "../Button/ButtonBlue";
import Buttonred from "../Button/Buttonred";

interface Props {
  bg: string;
  price: string;
  plan: string;
  num: string;
}

export default function PriceCard({ bg, price, plan, num }: Props) {
  const large = num == "2" ? "lg:scale-110 scale-100 z-[100]" : "";
  return (
    <>
      <div className={`relative ${large} bg-gray-100 shadow-md transform`}>
        <div
          className={`${bg} h-[200px] flex flex-col items-center justify-center rounded-t-md`}
        >
          <p className=" text-[20px] text-white  font-[500] mb-[1.5rem]">
            {plan}
          </p>
          <h1 className=" text-white text-[20px]">
            <span className=" text-[30px] text-yellow-300 font-bold">
              {price}/
            </span>
            per mo
          </h1>
        </div>
        {num == "1" && (
          <div className=" text-center p-4 mt-[1rem]">
            <p className=" text-[1rem] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]">
              Full Access Library
            </p>
            <p className=" text-[1rem] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]">
              Mulitple user
            </p>
            <p className=" text-[1rem] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]">
              Refund Policy
            </p>
            <p className=" text-[1rem] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]">
              Google Analytics
            </p>
            <p className=" text-[1rem] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]">
              24/7 Support
            </p>
          </div>
        )}

        {num == "2" && (
          <div className=" text-center p-4 mt-[1rem]">
            <p className=" text-[1rem] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]">
              Comprehensive Tutorials
            </p>
            <p className=" text-[1rem] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]">
              Team management Tools
            </p>
            <p className=" text-[1rem] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]">
              East return Policy
            </p>
            <p className=" text-[1rem] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]">
              In depth reporting
            </p>
            <p className=" text-[1rem] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]">
              24/7 Customer Care
            </p>
          </div>
        )}
        {num == "3" && (
          <div className=" text-center p-4 mt-[1rem]">
            <p className=" text-[1rem] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]">
              Extensive Resource Library
            </p>
            <p className=" text-[1rem] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]">
              Shared User Accounts
            </p>
            <p className=" text-[1rem] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]">
              Hassle-Free Returns
            </p>
            <p className=" text-[1rem] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]">
              Nonstop Support
            </p>
            <p className=" text-[1rem] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]">
              Comprehensive Analytics
            </p>
          </div>
        )}
        <div className=" mt-[1.5rem] mb-[1.5rem] text-center">
          {num != "2" && <Buttonred text="Choose Plan" />}
          {num == "2" && <ButtonBlue text="Choose Plan" />}
        </div>
      </div>
    </>
  );
}
