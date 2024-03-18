import PropTypes from "prop-types";
import cslx from "clsx";

const defaultClassName =
  "font-heading text-subtitle-mobile md:text-subtitle font-subtitle text-color-black";

const Subtitle = ({ text, className, children, ...rest }) => {
  return (
    <h3 className={cslx(defaultClassName, className)} {...rest}>
      {text ? text : children}
    </h3>
  );
};

Subtitle.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Subtitle;
