import { Text } from "../../atoms";

const LoginTextGap = () => {
  return (
    <div className="text-center">
      <div className="flex items-center gap-6">
        <div className="bg-color-black h-[1px] w-[200px]"></div>
        <Text text="Or" />
        <div className="bg-color-black h-[1px] w-[200px]"></div>
      </div>
      <Text text="Continue With" />
    </div>
  );
};

export default LoginTextGap;
