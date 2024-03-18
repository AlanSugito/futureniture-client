import { Button, InputText, Text } from "../../atoms";

const LoginForm = () => {
  return (
    <form className="flex flex-col gap-[0.5rem]">
      <InputText label="Email" inputClassName="rounded-[20px] py-2" />
      <InputText
        label="Password"
        type="password"
        inputClassName="rounded-[20px] py-2"
      />
      <Text
        text={"Email or Password is not valid."}
        className={"text-red-600"}
      />
      <Button
        text="Login"
        buttonClassName="w-[150px] mx-auto rounded-xl"
        textClassName={"text-subtitle font-heading"}
      />
    </form>
  );
};

export default LoginForm;
