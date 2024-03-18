import clsx from "clsx";
import PropTypes from "prop-types";
import logo from "../../assets/logo-white.svg";

const Logo = ({ className }) => {
  const defaultClassName = "absolute top-4 left-4";
  return (
    <div className={clsx(defaultClassName, className)}>
      <img src={logo} alt="Logo" />
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
