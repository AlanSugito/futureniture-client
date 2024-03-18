import { IconedButton } from "../../atoms";
import google from "../../../assets/google.svg";

const RegisterWithGoogleButton = () => {
  return (
    <IconedButton
      icon={google}
      text="Google"
      buttonClassName={"w-[300px] rounded-xl"}
    />
  );
};

export default RegisterWithGoogleButton;
