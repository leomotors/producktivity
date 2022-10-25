import type { FC } from "react";

interface IConfirmButton {
  text: string;
  handleSave(): void;
}
const ConfirmButton: FC<IConfirmButton> = ({ handleSave, text }) => {
  const hoverClass =
    "transition ease-in-out delay-50 duration-150 hover:scale-110 hover:cursor-pointer";
  return (
    <div className="w-full mb-2 flex items-center">
      <div className="flex text-xl mr-4 w-1/5"></div>
      <div
        className={`rounded-md py-2 px-4 bg-zinc-600 font-bold text-white ${hoverClass}`}
        onClick={() => handleSave()}
      >
        {text}
      </div>
    </div>
  );
};

export default ConfirmButton;
