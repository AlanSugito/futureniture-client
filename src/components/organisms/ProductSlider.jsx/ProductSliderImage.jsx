import lamp from "../../../assets/lamp.webp";
import { Subtitle, Text } from "../../atoms";

const ProductSliderImage = () => {
  return (
    <div className="flex flex-col gap-10">
      <img
        src={lamp}
        alt="product"
        className="aspect-square w-[300px] rounded-xl object-cover"
      />
      <div>
        <Subtitle text={"Edison Lamp"} />
        <Text text={"A bright edison lamp"} />
      </div>
    </div>
  );
};

export default ProductSliderImage;
