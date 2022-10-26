import type { FC } from "react";
import { useEffect, useState } from "react";
import { TagsInput } from "react-tag-input-component";

type Props = {
  name: string;
  value: string[];
  handleChange(value: string[]): void;
};

export const TagInput: FC<Props> = ({ handleChange, name, value }) => {
  useEffect(() => {
    setSelected(() => value);
    handleChange(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const [selected, setSelected] = useState(value || ["Homework"]);

  return (
    <div className="w-full mb-2 flex items-center">
      <div className="flex text-xl mr-4 w-1/5">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </div>
      <div className="rounded-md border-2 border-zinc-600">
        <TagsInput
          name="topic"
          placeHolder="Enter topics"
          value={selected}
          onChange={(value) => handleChange(value)}
        />
      </div>
    </div>
  );
};
