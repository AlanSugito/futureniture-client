import menuIcon from "../../../assets/menu.svg";
import defaultAvatar from "../../../assets/default-avatar.svg";
import { Card } from "../../atoms";
import { useState } from "react";
import { useAuthStore } from "../../../hooks";
import AuthMenu from "./AuthMenu";
import ProfileMenu from "./ProfileMenu";

const MenuBar = () => {
  const [showMenu, setShowmenu] = useState(false);
  const { accToken } = useAuthStore((state) => state.credentials);

  const toggleMenu = () => setShowmenu(!showMenu);

  return (
    <>
      <div className="absolute right-5 top-5 z-[99999] w-max">
        <div className="glassmorph flex w-max items-center justify-between gap-2 rounded-full px-4 py-2 ">
          <button onClick={toggleMenu}>
            <img src={menuIcon} alt="bar" className="w-8" />
          </button>
          <img
            src={defaultAvatar}
            alt="avatar"
            className="h-[40px] w-[40px] rounded-full bg-gray-400 object-cover"
          />
        </div>
        <Card
          className={`absolute -bottom-[6.5rem] left-0 right-0 bg-white ${
            showMenu ? "visible" : "hidden"
          }`}
        >
          <ul>
            {!accToken ? <AuthMenu toggleFunc={toggleMenu} /> : <ProfileMenu />}
          </ul>
        </Card>
      </div>
    </>
  );
};

export default MenuBar;
