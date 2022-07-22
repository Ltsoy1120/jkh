import React, { useRef, useState } from "react";
import InputMask from "react-input-mask";

interface TimeInputProps {
  dayOfWeek?: string;
  name: string;
  value: string;
  time: string;
  handleChangeSchedule: (
    name: string,
    value: string,
    time: string,
    dayOfWeek: string
  ) => void;
}
const TimeInput: React.FC<TimeInputProps> = ({
  dayOfWeek,
  time,
  name,
  value,
  handleChangeSchedule,
}) => {
  const ref = useRef(null);
  let mask = "12:34";
  let formatChars = {
    "1": "[0-2]",
    "2": value.startsWith("2") ? "[0-3]" : "[0-9]",
    "3": "[0-5]",
    "4": "[0-9]",
  };

  return (
    <InputMask
      ref={ref}
      mask={mask}
      name={name}
      value={value}
      onChange={(e) =>
        handleChangeSchedule(e.target.name, e.target.value, time, dayOfWeek)
      }
      placeholder={"00:00"}
      formatChars={formatChars}
    ></InputMask>
  );
};
export default TimeInput;
