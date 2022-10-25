import type { FC } from "react";
import { useEffect, useState } from "react";
import { TagsInput } from "react-tag-input-component";

type Props = {
  name: string;
  value: string[];
};

const TagInput: FC<Props> = ({ name, value }) => {
  useEffect(() => {
    console.log(value);
    setSelected(() => value);
  }, [value]);

  const [selected, setSelected] = useState(value || ["Homework"]);
  return (
    <div className="w-full mb-2 flex items-center">
      <div className="flex text-xl mr-4 w-1/5">{name}</div>
      <div className="rounded-md border-2 border-zinc-600">
        <TagsInput
          name="topic"
          placeHolder="Enter topics"
          value={selected}
          onChange={setSelected}
        />
      </div>
    </div>
  );
};

export default TagInput;
