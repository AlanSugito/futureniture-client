import PropTypes from "prop-types";

import { Card } from "../../atoms";
import LoginForm from "./LoginForm";
import LoginWithGoogleButton from "./LoginWithGoogleButton";
import LoginTextGap from "./LoginTextGap";
import LoginHeader from "./LoginHeader";
import LoginForgotPasswordButton from "./LoginForgotPasswordButton";
import { Modal } from "../../layouts";
import useModal from "../../../hooks/useModal";

const LoginModal = ({ visible }) => {
  const setShowLogin = useModal((state) => state.setShowLogin);

  const onClose = () => {
    setShowLogin(false);
  };

  if (!visible) {
    return <></>;
  }

  return (
    <Modal>
      <Card className="flex flex-col gap-2 bg-white md:w-[600px]">
        <LoginHeader onClose={onClose} />
        <div className="px-[3rem]">
          <LoginForm />
          <LoginForgotPasswordButton />
          <div className="centerize my-4 flex-col gap-3">
            <LoginTextGap />
            <LoginWithGoogleButton />
          </div>
        </div>
      </Card>
    </Modal>
  );
};

LoginModal.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};

export default LoginModal;
