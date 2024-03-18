import dashboard from "../../assets/dashboard.svg";
import search from "../../assets/search.svg";
import heart from "../../assets/heart.svg";
import basket from "../../assets/basket.svg";

import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="glassmorph rounded-full px-3 py-5 flex items-center gap-4 md:flex-col w-max h-max">
      <Link to={"/"}>
        <div
          className={`hover:bg-glass-active duration-300 rounded-full p-3 w-[50px] h-[50px] cursor-pointer ${
            pathname.includes("katalog") ? "bg-glass-active" : ""
          }`}
        >
          <img src={dashboard} alt="icon-dashboard" />
        </div>
      </Link>
      <Link to={"/search"}>
        <div
          className={`hover:bg-glass-active duration-300 rounded-full p-3 w-[50px] h-[50px] cursor-pointer ${
            pathname.includes("search") ? "bg-glass-active" : ""
          }`}
        >
          <img src={search} alt="icon-dashboard" />
        </div>
      </Link>
      <Link to={"/favorites"}>
        <div
          className={`hover:bg-glass-active duration-300 rounded-full p-3 w-[50px] h-[50px] cursor-pointer ${
            pathname.includes("favorites") ? "bg-glass-active" : ""
          }`}
        >
          <img src={heart} alt="icon-dashboard" />
        </div>
      </Link>
      <Link to={"/cart"}>
        <div
          className={`hover:bg-glass-active duration-300 rounded-full p-3 w-[50px] h-[50px] cursor-pointer relative ${
            pathname.includes("cart") ? "bg-glass-active" : ""
          }`}
        >
          <div className="absolute w-5 h-5 rounded-full p-3 -top-[3px] right-0 bg-color-yellow centerize">
            <span>5</span>
          </div>
          <img src={basket} alt="icon-dashboard" />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
