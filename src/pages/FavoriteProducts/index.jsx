import { Card, ProductCard, Title } from "../../components";

const FavoriteProducts = () => {
  return (
    <Card
      className={
        "glassmorph h-[450px] w-[300px] overflow-clip md:h-[520px] md:w-[1160px]"
      }
    >
      <Title className={"mb-4 text-white"}>Your Favorite Products</Title>
      <div className="centerize show-scrollbar h-[600px] overflow-y-auto py-[5rem]">
        <div className="mt-[15rem] grid grid-cols-4 gap-4 ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </Card>
  );
};

export default FavoriteProducts;
