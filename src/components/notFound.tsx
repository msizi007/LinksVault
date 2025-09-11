import nothing from "../assets/icons/nothing.png";
import Icon from "./icon";

interface Props {
  title: string;
  subtitle: string;
}

export default function NotFound(props: Props) {
  return (
    <div className="nothing">
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
      <Icon src={nothing} alt="nothing found" size={90} />
    </div>
  );
}
