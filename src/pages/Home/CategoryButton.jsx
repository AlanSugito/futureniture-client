import { Button } from "../../components";
import PropTypes from "prop-types";

const CategoryButton = ({ isActive, text }) => {
  const activeButtonClassName = "bg-white border-none group";

  return (
    <Button
      text={text}
      buttonClassName={`rounded-[100px] ${
        isActive ? activeButtonClassName : "bg-glass-active border-none"
      }`}
      textClassName={
        isActive ? "text-color-black group-hover:text-white" : "text-white"
      }
    />
  );
};

CategoryButton.propTypes = {
  isActive: PropTypes.bool,
  text: PropTypes.string,
};

export default CategoryButton;
