import { Card, Subtitle } from "../../components";
import Checkout from "./Checkout";
import Products from "./Products";

const Cart = () => {
  return (
    <Card className="glassmorph mt-6 h-[550px] overflow-y-clip">
      <Subtitle text="Your Shopping Cart" className={"my-2 text-white"} />
      <div className="grid grid-cols-2 gap-6">
        <Products />
        <Checkout />
      </div>
    </Card>
  );
};

export default Cart;
