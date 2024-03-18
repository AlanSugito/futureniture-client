import PropTypes from "prop-types";
import clsx from "clsx";

const defaultClassName =
  "border border-color-black px-3 py-1 outline-none focus:border-2 duration-300 text-body font-body bg-transparent";

const InputText = ({ label, inputClassName, type, value, ...rest }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-heading text-body font-subtitle">{label}</label>
      <input
        className={clsx(inputClassName, defaultClassName)}
        type={type}
        value={value}
        {...rest}
      />
    </div>
  );
};

InputText.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  inputClassName: PropTypes.string,
};

export default InputText;
