import { Button, Card, Subtitle, Text, Title } from "../../components";
import Detail from "./Detail";

const Checkout = () => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <Title className={"mb-3 text-white"}>Checkout</Title>
        <Card
          className={
            "glassmorph show-scrollbar flex max-h-[230px] flex-col gap-4 overflow-y-auto"
          }
        >
          <div className="flex items-center justify-between">
            <div>
              <Subtitle text={"Edison Lamp"} className={"text-white"} />
              <Text text={"2 units"} className={"text-white"} />
            </div>
            <Subtitle text={"$28"} className={"text-white"} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Subtitle text={"Edison Lamp"} className={"text-white"} />
              <Text text={"2 units"} className={"text-white"} />
            </div>
            <Subtitle text={"$28"} className={"text-white"} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Subtitle text={"Edison Lamp"} className={"text-white"} />
              <Text text={"2 units"} className={"text-white"} />
            </div>
            <Subtitle text={"$28"} className={"text-white"} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Subtitle text={"Edison Lamp"} className={"text-white"} />
              <Text text={"2 units"} className={"text-white"} />
            </div>
            <Subtitle text={"$28"} className={"text-white"} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Subtitle text={"Edison Lamp"} className={"text-white"} />
              <Text text={"2 units"} className={"text-white"} />
            </div>
            <Subtitle text={"$28"} className={"text-white"} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Subtitle text={"Edison Lamp"} className={"text-white"} />
              <Text text={"2 units"} className={"text-white"} />
            </div>
            <Subtitle text={"$28"} className={"text-white"} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Subtitle text={"Edison Lamp"} className={"text-white"} />
              <Text text={"2 units"} className={"text-white"} />
            </div>
            <Subtitle text={"$28"} className={"text-white"} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Subtitle text={"Edison Lamp"} className={"text-white"} />
              <Text text={"2 units"} className={"text-white"} />
            </div>
            <Subtitle text={"$28"} className={"text-white"} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Subtitle text={"Edison Lamp"} className={"text-white"} />
              <Text text={"2 units"} className={"text-white"} />
            </div>
            <Subtitle text={"$28"} className={"text-white"} />
          </div>
        </Card>
      </div>
      <Detail />
      <Button
        text={"Checkout"}
        buttonClassName={"bg-black rounded-full"}
        textClassName={"text-white"}
      />
    </div>
  );
};

export default Checkout;
