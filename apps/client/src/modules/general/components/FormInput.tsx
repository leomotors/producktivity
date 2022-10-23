import type { NextPage } from "next";

type Props = {
  name: string;
};

const FormInput: NextPage<Props> = ({ name }) => {
  return (
    <div className="mb-6 flex space-x-6 items-center">
      <div className="flex w-5/6 text-xl text-white">{name}</div>
      <input
        className="rounded-md bg-zinc-600 px-4 py-2 text-white"
        name={name}
      ></input>
    </div>
  );
};

export default FormInput;
