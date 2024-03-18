import { Card } from "../../components";
import avatar from "../../assets/default-avatar.svg";
import dashboardBlack from "../../assets/dashboard-black.svg";

const Sidebar = () => {
  return (
    <Card className="bg-white p-2">
      <div className="mx-auto mb-5 aspect-square w-20 overflow-clip rounded-full bg-gray-500">
        <img src={avatar} alt="profile-img" className="w-20" />
      </div>
      <div className="flex h-[60%] flex-col items-center justify-center gap-5">
        <div className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-1 duration-300 hover:bg-slate-400">
          <img src={dashboardBlack} alt="..." />

          <span className="text-subtitle font-subtitle text-color-black">
            Dashboard
          </span>
        </div>
        <div className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-1 duration-300 hover:bg-slate-400">
          <img src={dashboardBlack} alt="..." />

          <span className="text-subtitle font-subtitle text-color-black">
            Dashboard
          </span>
        </div>
        <div className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-1 duration-300 hover:bg-slate-400">
          <img src={dashboardBlack} alt="..." />

          <span className="text-subtitle font-subtitle text-color-black">
            Dashboard
          </span>
        </div>
      </div>
    </Card>
  );
};

export default Sidebar;
