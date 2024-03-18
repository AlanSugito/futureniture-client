import chevron from "../../assets/chevron-white.svg";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="aspect-square rounded-full p-3 centerize bg-color-black"
      onClick={() => navigate("/")}
    >
      <img src={chevron} alt="back-button" />
    </button>
  );
};

export default BackButton;
