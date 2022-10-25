import type { FC } from "react";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  name: string;
  value: Date;
};

const DateInput: FC<Props> = ({ name, value }) => {
  const [startDate, setStartDate] = useState(value || new Date());
  useEffect(() => {
    console.log(value);
    setStartDate(() => value);
  }, [value]);
  return (
    <div className="w-full mb-2 flex items-center">
      <div className="flex text-xl mr-4 w-1/5">{name}</div>
      <div className="rounded-md border-2 border-zinc-600 p-1">
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
        />
      </div>
    </div>
  );
};

export default DateInput;
