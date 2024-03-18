import DetailHeader from "./DetailHeader";
import DetailFooter from "./DetailFooter";
import DetailBody from "./DetailBody";
import ProductAttributes from "./ProductAttributes";

const ProductDetail = () => {
  return (
    <div className="p-6 flex flex-col justify-between h-[600px]">
      <DetailHeader />
      <DetailBody />
      <ProductAttributes />
      <DetailFooter />
    </div>
  );
};

export default ProductDetail;
