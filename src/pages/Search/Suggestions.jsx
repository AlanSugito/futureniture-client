import { Card } from "../../components";
import SuggestedProduct from "./SuggestedProducts";
import PropTypes from "prop-types";
import clsx from "clsx";

const Suggestions = ({ visible }) => {
  return (
    <div className={clsx("absolute top-[85%]", { hidden: !visible })}>
      <Card
        className={
          "show-scrollbar max-h-[400px] w-full overflow-y-auto bg-white duration-300"
        }
      >
        <SuggestedProduct />
        <SuggestedProduct />
        <SuggestedProduct />
      </Card>
    </div>
  );
};

Suggestions.propTypes = {
  visible: PropTypes.bool,
};

export default Suggestions;
