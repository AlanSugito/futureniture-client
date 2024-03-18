import chevron from "../../assets/chevron.svg";
import PropTypes from "prop-types";

const ArrowButton = ({ isLeft, hide, ...rest }) => {
  return (
    <button
      className={`bg-white rounded-full centerize p-3 absolute z-[9999] ${
        isLeft ? "left-0" : "right-0"
      } ${hide ? "hidden" : "visible"}`}
      {...rest}
    >
      <img src={chevron} alt="chevron" className={isLeft ? "rotate-180" : ""} />
    </button>
  );
};

ArrowButton.propTypes = {
  isLeft: PropTypes.bool,
  hide: PropTypes.bool,
};

export default ArrowButton;
