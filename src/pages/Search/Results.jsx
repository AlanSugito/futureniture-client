import { ProductCard } from "../../components";

const Results = () => {
  return (
    <div className="centerize show-scrollbar h-[600px] overflow-y-auto py-[12rem]">
      <div className="mt-[15rem] grid grid-cols-4 gap-4 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Results;
