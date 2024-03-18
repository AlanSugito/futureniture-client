import { IconedButton } from "../../atoms";
import google from "../../../assets/google.svg";

const oauthURL = "http://localhost:5000/users/auth/login/google";

const LoginWithGoogleButton = () => {
  return (
    <a href={oauthURL}>
      <IconedButton
        icon={google}
        text="Google"
        buttonClassName={"w-[300px] rounded-xl"}
      />
    </a>
  );
};

export default LoginWithGoogleButton;
