import { ProductCard } from "../../components";
import ArrowButton from "./ArrowButton";
import { useRef, useState } from "react";

const Products = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const productsWrapper = useRef();

  const scrollToRight = () => {
    const maxScroll =
      productsWrapper.current.scrollWidth - productsWrapper.current.clientWidth;
    if (productsWrapper.current.scrollLeft < maxScroll) {
      setScrollPosition((prev) => (prev += 150));
      productsWrapper.current.scrollTo(scrollPosition, 0);
    }
  };

  const scrollToLeft = () => {
    if (productsWrapper.current.scrollLeft !== 0) {
      setScrollPosition((prev) => (prev -= 150));
      productsWrapper.current.scrollTo(scrollPosition, 0);
    }
  };

  return (
    <div className="relative mb-28 flex items-center gap-5 overflow-clip">
      <ArrowButton isLeft onClick={scrollToLeft} />
      <div
        ref={productsWrapper}
        className="max-w-400 flex gap-2 overflow-x-auto scroll-smooth"
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <ArrowButton onClick={scrollToRight} />
    </div>
  );
};

export default Products;
