import { Card } from "../../components";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";

const Profile = () => {
  return (
    <Card className="glassmorph h-[350px] w-[300px] overflow-clip md:h-[520px] md:w-[1160px]">
      <div className="grid h-full grid-cols-4 gap-4">
        <Sidebar />
        <div className="centerize col-span-3">
          <Dashboard />
        </div>
      </div>
    </Card>
  );
};

export default Profile;
