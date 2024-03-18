import chevron from "../../../assets/chevron.svg";
import clsx from "clsx";
import PropTypes from "prop-types";

const ProductSliderHide = ({ hide, onHide }) => {
  return (
    <div
      className="centerize absolute -top-[40px] left-1/2 right-1/2 h-[3rem] w-[6rem] -translate-x-1/2 cursor-pointer rounded-tl-xl rounded-tr-xl bg-white"
      onClick={onHide}
    >
      <img
        src={chevron}
        alt="chevron"
        className={clsx({ "-rotate-90": !hide, "rotate-90": hide })}
      />
    </div>
  );
};

ProductSliderHide.propTypes = {
  hide: PropTypes.bool,
  onHide: PropTypes.func,
};

export default ProductSliderHide;
