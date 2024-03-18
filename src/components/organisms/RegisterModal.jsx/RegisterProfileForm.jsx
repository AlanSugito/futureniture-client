import { Button, InputText, Text } from "../../atoms";
import PropTypes from "prop-types";

const RegisterProfileForm = ({ onNext }) => {
  return (
    <form className="flex flex-col gap-[0.5rem]">
      <InputText label="Full Name*" inputClassName="rounded-[20px] py-2" />
      <InputText label="Phone*" inputClassName="rounded-[20px] py-2" />
      <InputText label="Address*" inputClassName="rounded-[20px] py-2" />
      <Text text={"Full name is required."} className={"text-red-600"} />
      <Button
        text="Next"
        buttonClassName="w-[150px] mx-auto rounded-xl"
        textClassName={"text-body font-heading"}
        onClick={onNext}
        isLoading={true}
      />
    </form>
  );
};

RegisterProfileForm.propTypes = {
  onNext: PropTypes.func,
};

export default RegisterProfileForm;
