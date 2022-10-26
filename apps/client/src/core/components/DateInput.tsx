import type { FC } from "react";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  name: string;
  value: Date;
  handleChange: (value: Date) => void;
};

export const DateInput: FC<Props> = ({ handleChange, name, value }) => {
  // const initialDate = new Date(value);
  const [startDate, setStartDate] = useState(value || new Date());
  useEffect(() => {
    setStartDate(() => value);
    // handleChange(value);
  }, [value]);
  return (
    <div className="w-full mb-2 flex items-center">
      <div className="flex text-xl mr-4 w-1/5">{name}</div>
      <div className="rounded-md border-2 border-zinc-600 p-1">
        <DatePicker
          selected={startDate}
          onChange={(value) => value !== null && handleChange(value)}
        />
      </div>
    </div>
  );
};
