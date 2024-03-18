import lamp from "../../assets/lamp.webp";
import { CounterButton, Subtitle, Text } from "../../components";

const Products = () => {
  return (
    <div className="show-scrollbar flex max-h-[500px] flex-col gap-4 overflow-y-auto p-4">
      <div className="flex items-center gap-6">
        <img
          src={lamp}
          alt="product"
          className="h-[220px] w-[300px] rounded-xl object-cover"
        />
        <div className="flex flex-col gap-10">
          <div>
            <Subtitle text={"Edison Lamp"} className="text-white" />
            <Text text={"A bright edison lamp"} className="text-white" />
            <Subtitle text={"$14"} className="text-white" />
          </div>
          <CounterButton />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <img
          src={lamp}
          alt="product"
          className="h-[220px] w-[300px] rounded-xl object-cover"
        />
        <div className="flex flex-col gap-10">
          <div>
            <Subtitle text={"Edison Lamp"} className="text-white" />
            <Text text={"A bright edison lamp"} className="text-white" />
            <Subtitle text={"$14"} className="text-white" />
          </div>
          <CounterButton />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <img
          src={lamp}
          alt="product"
          className="h-[220px] w-[300px] rounded-xl object-cover"
        />
        <div className="flex flex-col gap-10">
          <div>
            <Subtitle text={"Edison Lamp"} className="text-white" />
            <Text text={"A bright edison lamp"} className="text-white" />
            <Subtitle text={"$14"} className="text-white" />
          </div>
          <CounterButton />
        </div>
      </div>
    </div>
  );
};

export default Products;
