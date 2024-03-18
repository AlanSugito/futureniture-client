import { Subtitle, Text, Title } from "../../components";
import star from "../../assets/star.svg";

const DetailBody = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <Title text="Edison Lamp" className="text-white" />
          <Subtitle text="A bright edison lamp" className="text-white" />
          <Title text="$14" className="text-white" />
        </div>
        <div className="flex items-center gap-2">
          <Text text="12 Reviews" className="text-white" />
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="4" fill="#FFFEFE" />
          </svg>
          <div className="flex items-center gap-3">
            <img src={star} alt="rating" />
            <img src={star} alt="rating" />
            <img src={star} alt="rating" />
            <img src={star} alt="rating" />
          </div>
        </div>
      </div>
      <div className="mt-6 max-h-[200px]">
        <Text
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis perferendis accusantium deserunt quaerat fugiat aliquam libero unde vel facere itaque! Culpa fuga non laboriosam neque sapiente? Incidunt, quae quo. Praesentium ut officiis"
          }
          className={"text-white"}
        />
      </div>
    </div>
  );
};

export default DetailBody;
