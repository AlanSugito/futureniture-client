import PropTypes from "prop-types";
import cslx from "clsx";

const defaultClassName =
  "font-body text-body-mobile md:text-body font-normal text-color-black";

const Text = ({ text, children, className, ...rest }) => {
  return (
    <p className={cslx(defaultClassName, className)} {...rest}>
      {text ? text : children}
    </p>
  );
};

Text.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Text;
