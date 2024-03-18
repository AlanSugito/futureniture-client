import logoBlack from "../../../assets/logo.svg";
import close from "../../../assets/close.svg";
import PropTypes from "prop-types";
import { Title } from "../../atoms";

const LoginHeader = ({ onClose }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <img src={logoBlack} alt="logo" />
        <button onClick={onClose}>
          <img src={close} alt="close-modal" />
        </button>
      </div>
      <div className="centerize my-4">
        <Title text="Login" className={"text-color-black"} />
      </div>
    </>
  );
};

LoginHeader.propTypes = {
  onClose: PropTypes.func,
};

export default LoginHeader;
