import { Card, Subtitle, Text } from "../../atoms";
import lamp from "../../../assets/lamp.webp";
import star from "../../../assets/star.svg";
import heart from "../../../assets/heart.svg";
import heartFill from "../../../assets/heart-fill.svg";
import basket from "../../../assets/basket.svg";

import { useNavigate } from "react-router-dom";
import useModal from "../../../hooks/useModal";
import { useState } from "react";

const ProductCard = () => {
  const navigate = useNavigate();
  const setShowProductSlider = useModal((state) => state.setShowProductSlider);

  const [isFavorite, setIsFavorite] = useState(false);

  const goToDetail = () => {
    navigate("/katalog/product/1");
  };

  const toggleIsFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite((prev) => !prev);
  };

  const showProductSlider = (e) => {
    e.stopPropagation();
    setShowProductSlider(true);
  };

  return (
    <Card
      className="hover:glassmorph flex w-[200px] min-w-[200px] cursor-pointer flex-col gap-2 bg-transparent duration-300 md:w-[250px] md:min-w-[250px]"
      onClick={goToDetail}
    >
      <img
        src={lamp}
        alt="product"
        className="h-[12rem] w-full rounded-lg object-cover"
      />
      <div className="flex flex-col gap-1">
        <Subtitle text="Edison Lamp" className="text-white" />
        <Text text="Glowing lamp" className="text-white" />
        <Subtitle text={"$14"} className="text-white" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={star}
              alt="star"
              className="h-[15px] w-[15px] md:h-[20px] md:w-[20px]"
            />
            <img
              src={star}
              alt="star"
              className="h-[15px] w-[15px] md:h-[20px] md:w-[20px]"
            />
            <img
              src={star}
              alt="star"
              className="h-[15px] w-[15px] md:h-[20px] md:w-[20px]"
            />
            <img
              src={star}
              alt="star"
              className="h-[15px] w-[15px] md:h-[20px] md:w-[20px]"
            />
          </div>
          <div
            className="flex cursor-pointer items-center gap-3"
            onClick={toggleIsFavorite}
          >
            <img
              src={isFavorite ? heartFill : heart}
              alt="star"
              className="h-[15px] w-[15px] md:h-[20px] md:w-[20px]"
            />
            <div
              className="cursor-pointer rounded-full bg-glass-active p-2"
              onClick={showProductSlider}
            >
              <img
                src={basket}
                alt="star"
                className="h-[15px] w-[15px] md:h-[20px] md:w-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
