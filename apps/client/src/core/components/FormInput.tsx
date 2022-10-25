import type { ChangeEvent, FC } from "react";

type Props = {
  name: string;
  value: string;
  handleChange: (value: ChangeEvent<HTMLInputElement>) => void;
};

export const FormInput: FC<Props> = ({ handleChange, name, value }) => {
  return (
    <div className="w-full mb-2 flex items-center">
      <div className="flex text-xl mr-4 w-1/5">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </div>
      <input
        className="rounded-md border-2 border-zinc-600 p-1"
        name={name}
        value={value}
        onChange={(e) => {
          handleChange(e);
        }}
      ></input>
    </div>
  );
};
