import { Card, Subtitle } from "../../atoms";
import { Modal } from "../../layouts";
import PropTypes from "prop-types";
import RegisterHeader from "./RegisterHeader";
import RegisterProfileForm from "./RegisterProfileForm";

import { useState } from "react";
import useModal from "../../../hooks/useModal";
import RegisterCredentialsForm from "./RegisterCredentialsForm";
import RegisterTextGap from "./RegisterTextGap";
import RegisterWithGoogleButton from "./RegisterWithGoogleButton";

const RegisterModal = ({ visible }) => {
  const [step, setStep] = useState(1);
  const setShowRegister = useModal((state) => state.setShowRegister);

  if (!visible) {
    return <></>;
  }

  const onClose = () => {
    setShowRegister(false);
    setStep(1);
  };

  return (
    <Modal>
      <Card className="show-scrollbar flex h-[600px] flex-col gap-2 overflow-y-auto bg-white pb-[2rem] md:w-[600px]">
        <RegisterHeader onClose={onClose} />
        <div className="px-[3rem]">
          <Subtitle text={"Set Your Profile"} className={"mb-5 font-bold"} />
          {step !== 2 ? (
            <RegisterProfileForm onNext={() => setStep(2)} />
          ) : (
            <RegisterCredentialsForm />
          )}
        </div>
        <div className="centerize my-4 flex-col gap-3">
          <RegisterTextGap />
          <RegisterWithGoogleButton />
        </div>
      </Card>
    </Modal>
  );
};

RegisterModal.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};

export default RegisterModal;
