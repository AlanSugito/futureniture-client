import { Button, InputText, Text } from "../../atoms";

const RegisterCredentialsForm = () => {
  return (
    <form className="flex flex-col gap-[0.5rem]">
      <InputText label="Email*" inputClassName="rounded-[20px] py-2" />
      <InputText label="Password*" inputClassName="rounded-[20px] py-2" />
      <Text
        text={"Password must be at least 6 character!"}
        className={"text-red-600"}
      />
      <Button
        text="Sign Up"
        buttonClassName="w-[150px] mx-auto rounded-xl"
        textClassName={"text-subtitle font-heading"}
      />
    </form>
  );
};

export default RegisterCredentialsForm;
