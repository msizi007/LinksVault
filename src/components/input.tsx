import React from "react";

interface Props {
  classname?: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Input(props: Props) {
  return (
    <input
      className={props.classname}
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => {
        props.setValue(e.target.value);
      }}
    />
  );
}
