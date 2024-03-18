import { useAuthStore } from "../../hooks";
import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const Oauth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const setAccToken = useAuthStore((state) => state.setAccToken);

  useEffect(() => {
    setAccToken(searchParams.get("acc_token"));
    navigate("/");
  });

  return <div></div>;
};

export default Oauth;
