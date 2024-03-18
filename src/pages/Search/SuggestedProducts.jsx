import { Card, Subtitle, Text } from "../../components";
import lamp from "../../assets/lamp.webp";
import { useNavigate } from "react-router-dom";

const SuggestedProduct = () => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate("/katalog/product/1");
  };

  return (
    <Card
      className={
        "flex cursor-pointer items-center gap-5 duration-300 hover:bg-gray-200"
      }
      onClick={goToDetail}
    >
      <img
        src={lamp}
        alt="lamp"
        className="h-52 w-60 rounded-xl object-cover"
      />
      <div>
        <Subtitle text={"Edison Lamp"} />
        <Text text={"A bright edison lamp"} />
        <Subtitle text={"$14"} />
      </div>
    </Card>
  );
};

export default SuggestedProduct;
