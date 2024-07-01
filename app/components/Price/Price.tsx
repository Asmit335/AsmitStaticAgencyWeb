import PriceCard from "./PriceCard";

const PriceCardData = [
  { bg: "bg-[orange]", price: "19.99", num: "1", plan: "Starter" },
  { bg: "bg-[green]", price: "29.99", num: "2", plan: "Premium" },
  { bg: "bg-[blue]", price: "39.99", num: "3", plan: "Ultimate" },
];
export default function Price() {
  return (
    <>
      <div className="text-center p-4 md:p-8">
        <p className="text-blue-900 text-sm md:text-lg">
          Deal for your Business
        </p>
        <p className="text-blue-900 text-xl md:text-4xl mt-2 font-bold">
          Meet our Pricing plan that suit you!
        </p>
      </div>
      <div className=" w-[80%] mx-auto grid pt-[6rem] gap-[2rem] lg:gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
        {PriceCardData.map((card, index) => {
          return (
            <div key={index}>
              <PriceCard
                bg={card.bg}
                price={card.price}
                num={card.num}
                plan={card.plan}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
