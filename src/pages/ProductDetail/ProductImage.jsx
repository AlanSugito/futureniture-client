import lamp from "../../assets/lamp.webp";

const ProductImage = () => {
  return (
    <div className="h-full overflow-clip">
      <img
        src={lamp}
        alt="product"
        className="object-cover h-full rounded-[20px]"
      />
    </div>
  );
};

export default ProductImage;
