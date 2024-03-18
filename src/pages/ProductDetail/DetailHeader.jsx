import BackButton from "./BackButton";
import heart from "../../assets/heart.svg";
import heartFill from "../../assets/heart-fill.svg";

import { useState } from "react";

const DetailHeader = () => {
  const [isFav, setIsFav] = useState(false);

  const toggleIsFav = () => setIsFav((prev) => !prev);

  return (
    <div className="flex items-center justify-between">
      <BackButton />
      <button onClick={toggleIsFav}>
        <img
          src={isFav ? heartFill : heart}
          alt="love"
          className="w-[38px] h-[38px]"
        />
      </button>
    </div>
  );
};

export default DetailHeader;
