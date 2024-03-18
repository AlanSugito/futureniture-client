import { Button, Subtitle } from "../../components";

const ProductAttributes = () => {
  return (
    <div>
      <Subtitle text={"Colors"} className={"text-white mb-4"} />
      <div className="flex gap-3 items-center">
        <Button
          text={"Cyan"}
          buttonClassName="rounded-full bg-glass-active border-none"
          textClassName={"text-white"}
        />
        <Button
          text={"Turqoise"}
          buttonClassName="rounded-full bg-glass-active border-none"
          textClassName={"text-white"}
        />
        <Button
          text={"Beige"}
          buttonClassName="rounded-full bg-glass-active border-none"
          textClassName={"text-white"}
        />
        <Button
          text={"Cream"}
          buttonClassName="rounded-full bg-glass-active border-none"
          textClassName={"text-white"}
        />
      </div>
    </div>
  );
};

export default ProductAttributes;
