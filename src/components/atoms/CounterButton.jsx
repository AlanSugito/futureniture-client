import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";

import { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

const CounterButton = ({
  textClassName,
  plusButtonClassName,
  minusButtonClassName,
}) => {
  const [amount, setAmount] = useState(0);

  const subtract = (e) => {
    e.stopPropagation();
    if (amount !== 0) {
      setAmount((prev) => (prev -= 1));
    }
  };

  const add = (e) => {
    e.stopPropagation();
    setAmount((prev) => (prev += 1));
  };

  return (
    <div className="flex w-[150px] items-center justify-between rounded-full bg-glass-active p-2">
      <button
        onClick={subtract}
        className={clsx(
          "aspect-square rounded-full bg-color-black p-2",
          plusButtonClassName,
        )}
      >
        <img src={minus} alt="minus" className="w-5" />
      </button>
      <span
        className={clsx(textClassName, "text-subtitle", {
          "text-white": !textClassName,
        })}
      >
        {amount}
      </span>
      <button
        onClick={add}
        className={clsx(
          "aspect-square rounded-full bg-color-black p-2",
          minusButtonClassName,
        )}
      >
        <img src={plus} alt="plus" className="w-5" />
      </button>
    </div>
  );
};

CounterButton.propTypes = {
  textClassName: PropTypes.string,
  plusButtonClassName: PropTypes.string,
  minusButtonClassName: PropTypes.string,
};

export default CounterButton;
