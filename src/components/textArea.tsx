import { AppContext } from "./appContext";
import { useContext } from "react";

interface Props {
  classname?: string;
  placeholder: string;
  rows: number;
}
export default function TextArea(props: Props) {
  const context = useContext(AppContext);

  const { description, setDescription } = context;

  return (
    <textarea
      className={props.classname}
      placeholder={props.placeholder}
      rows={props.rows}
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    ></textarea>
  );
}
