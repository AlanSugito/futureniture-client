import { useModal } from "../../../hooks";
import PropTypes from "prop-types";

const AuthMenu = ({ toggleFunc }) => {
  const setShowLogin = useModal((state) => state.setShowLogin);
  const setShowRegister = useModal((state) => state.setShowRegister);
  const showLogin = () => {
    setShowLogin(true);
    toggleFunc();
  };

  const showRegister = () => {
    setShowRegister(true);
    toggleFunc();
  };
  return (
    <>
      <li
        className="cursor-pointer rounded-md px-2 py-1 duration-300 hover:bg-gray-200"
        onClick={showRegister}
      >
        Sign up
      </li>
      <li
        className="cursor-pointer rounded-md px-2 py-1 duration-300 hover:bg-gray-200"
        onClick={showLogin}
      >
        Login
      </li>
    </>
  );
};

AuthMenu.propTypes = {
  toggleFunc: PropTypes.func,
};

export default AuthMenu;
