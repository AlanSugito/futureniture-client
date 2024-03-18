import PropTypes from "prop-types";
import clsx from "clsx";

const defaultClassName =
  "text-body centerize border border-color-black px-4 py-2 hover:bg-color-black hover:text-white duration-300 transition-colors text-color-black";

const IconedButton = ({
  text,
  icon,
  buttonClassName,
  textClassName,
  ...rest
}) => {
  return (
    <button className={clsx(defaultClassName, buttonClassName)} {...rest}>
      <span
        className={clsx(
          "font-subtitle flex items-center gap-2 text-subtitle",
          textClassName
        )}
      >
        <img src={icon} alt="icon" className="w-6" />
        <span>{text}</span>
      </span>
    </button>
  );
};

IconedButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  buttonClassName: PropTypes.string,
  textClassName: PropTypes.string,
};

export default IconedButton;
