import React from "react";

interface Props {
  classname?: string;
  placeholder: string;
  rows: number;
  value: string;
  func: React.Dispatch<React.SetStateAction<string>>;
}
export default function TextArea(props: Props) {
  return (
    <textarea
      className={props.classname}
      placeholder={props.placeholder}
      rows={props.rows}
      value={props.value}
      onChange={(e) => props.func(e.target.value)}
    ></textarea>
  );
}
