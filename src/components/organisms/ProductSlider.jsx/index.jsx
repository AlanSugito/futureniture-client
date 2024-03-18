import { Card, Title } from "../../atoms";
import { useState, useEffect } from "react";
import useModal from "../../../hooks/useModal";
import clsx from "clsx";

import ProductSliderImage from "./ProductSliderImage";
import ProductSliderOptions from "./ProductSliderOptions";
import ProductSliderButtons from "./ProductSliderButtons";
import ProductSliderHide from "./ProductSliderHide";

const ProductSlider = () => {
  const [hide, setHide] = useState(true);
  const showProductSlider = useModal((state) => state.showProductSlider);
  const setShowProductSlider = useModal((state) => state.setShowProductSlider);
  const defaultClassName =
    "h-[500px] w-[400px] translate-y-[210%] mx-auto relative bg-white md:w-[920px] ";

  useEffect(() => {
    setHide(false);

    return () => setHide(true);
  }, [hide]);

  const hideSlider = () => {
    setHide(true);
    setTimeout(() => {
      setShowProductSlider(false);
    }, 600);
  };

  return (
    <div
      className={clsx("fixed inset-0 z-[99999] bg-color-black/60", {
        hidden: !showProductSlider,
      })}
    >
      <Card
        className={clsx(defaultClassName, {
          "slide-up": showProductSlider,
          "slide-down": hide,
        })}
      >
        <ProductSliderHide onHide={hideSlider} />
        <div className="flex gap-16">
          <ProductSliderImage />
          <div className="flex flex-col justify-between pr-4">
            <Title text={"Add edison lamp to your cart"} />
            <ProductSliderOptions />
            <ProductSliderButtons />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductSlider;
