import { Card, Subtitle } from "../../components";

const Dashboard = () => {
  return (
    <Card className="glassmorph h-[350px] w-[300px] overflow-clip md:h-[400px] md:w-[860px]">
      <Subtitle className="text-white">Dashboard</Subtitle>
      <div className="grid grid-cols-3 gap-3">
        <Card className="bg-white">1</Card>
        <Card className="bg-white">2</Card>
        <Card className="bg-white">3</Card>
      </div>
    </Card>
  );
};

export default Dashboard;
