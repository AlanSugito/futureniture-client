import { Card, ProductSlider, Title } from "../../components";
import CategoryButtons from "./CategoryButtons";
import Products from "./Products";
import { useAuthStore } from "../../hooks";

const Home = () => {
  const credentials = useAuthStore((state) => state.credentials);
  console.log(credentials);

  return (
    <>
      <Card className="glassmorph h-[350px] w-[300px] overflow-clip md:h-[520px] md:w-[1160px]">
        <div className="mb-4">
          <Title text="Get inspired" className="mb-2 text-white" />
          <CategoryButtons />
        </div>
        <div className="max-h-full overflow-y-auto">
          <Products />
          <Products />
        </div>
      </Card>
      <ProductSlider />
    </>
  );
};

export default Home;
