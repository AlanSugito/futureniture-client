import PropTypes from "prop-types";
import clsx from "clsx";

const defaultClassName =
  "text-body centerize border border-color-black px-2 py-1 hover:text-white duration-300 transition-colors text-color-black";

const Button = ({
  text,
  buttonClassName,
  textClassName,
  isLoading,
  ...rest
}) => {
  return (
    <button
      className={clsx(defaultClassName, buttonClassName, {
        "h-[60px] cursor-not-allowed": isLoading,
        "hover:bg-color-black": !isLoading,
      })}
      {...rest}
      disabled={isLoading}
    >
      <span className={clsx("text-body font-subtitle", textClassName)}>
        {!isLoading ? text : <div className="loader"></div>}
      </span>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  buttonClassName: PropTypes.string,
  textClassName: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default Button;
