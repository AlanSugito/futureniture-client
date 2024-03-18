import { Subtitle } from "../../components";

const Detail = () => {
  return (
    <div className="glassmorph flex flex-col gap-2 px-10 py-5">
      <div className="flex items-center justify-between">
        <Subtitle text={"Discount:"} className={"text-white"} />
        <Subtitle text={"$0"} className={"text-white"} />
      </div>
      <div className="flex items-center justify-between">
        <Subtitle text={"Total:"} className={"text-white"} />
        <Subtitle text={"$28"} className={"text-white"} />
      </div>
    </div>
  );
};

export default Detail;
