import { Button, CounterButton } from "../../atoms";

const ProductSliderButtons = () => {
  return (
    <div className={"flex items-center justify-end gap-5"}>
      <CounterButton textClassName={"text-color-black"} />
      <Button text={"Add to cart ($14)"} buttonClassName={"rounded-full"} />
    </div>
  );
};

export default ProductSliderButtons;
