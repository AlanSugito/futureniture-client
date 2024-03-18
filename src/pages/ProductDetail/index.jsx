import { Card } from "../../components";
import ProductDetail from "./ProductDetail";
import ProductImage from "./ProductImage";

const Product = () => {
  return (
    <Card className="glassmorph grid h-[450px] w-[300px] grid-cols-1 overflow-auto p-0 md:h-[600px] md:w-[1160px] md:grid-cols-2 md:overflow-clip">
      <ProductImage />
      <ProductDetail />
    </Card>
  );
};

export default Product;
