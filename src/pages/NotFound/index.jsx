import emptyBox from "../../assets/cardboard-box.jpg";
import { Title } from "../../components";

const NotFound = () => {
  return (
    <div className="centerize h-[100dvh] flex-col">
      <Title>OOppsss, The Page is Not Found</Title>
      <div className="flex items-center gap-5">
        <img
          src={emptyBox}
          alt="box"
          className="h-[200px] w-[200px] object-cover"
        />
        <h1 className={"font-heading text-[6rem] text-color-black"}>404</h1>
      </div>
    </div>
  );
};

export default NotFound;
