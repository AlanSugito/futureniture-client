import PropTypes from "prop-types";
import cslx from "clsx";

const defaultClassName =
  "font-heading text-title-mobile md:text-title font-title text-color-black";

const Title = ({ text, className, children, ...rest }) => {
  return (
    <h1 className={cslx(defaultClassName, className)} {...rest}>
      {text ? text : children}
    </h1>
  );
};

Title.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Title;
