import PropTypes from "prop-types";
import clsx from "clsx";

const defaultClassName = "p-4 rounded-lg min-w-3 min-h-3";

const Card = ({ children, className, ...rest }) => {
  return (
    <div className={clsx(defaultClassName, className)} {...rest}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Card;
