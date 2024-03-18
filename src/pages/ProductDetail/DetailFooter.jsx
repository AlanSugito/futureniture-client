import { IconedButton, CounterButton } from "../../components";
import basket from "../../assets/basket.svg";

const DetailFooter = () => {
  return (
    <div className="flex items-center justify-end gap-6 p-3">
      <CounterButton />
      <IconedButton
        text="Add to cart"
        icon={basket}
        buttonClassName={"border-none bg-glass-active py-4 rounded-full"}
        textClassName={"text-white"}
      />
    </div>
  );
};

export default DetailFooter;
