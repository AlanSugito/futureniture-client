import { Button, Subtitle } from "../../atoms";

const ProductSliderOptions = () => {
  return (
    <div>
      <Subtitle text={"Colors"} className={"mb-10"} />
      <div className="flex flex-wrap items-center gap-4 ">
        <Button text={"Grey"} buttonClassName={"rounded-full"} />
        <Button text={"Gold"} buttonClassName={"rounded-full"} />
        <Button text={"Turqoise"} buttonClassName={"rounded-full"} />
        <Button text={"Maroon"} buttonClassName={"rounded-full"} />
        <Button text={"Sage"} buttonClassName={"rounded-full"} />
      </div>
    </div>
  );
};

export default ProductSliderOptions;
