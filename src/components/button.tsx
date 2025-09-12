interface Props {
  classname?: string;
  text: string;
  func(
    url?: string | React.MouseEvent<HTMLButtonElement>
  ): React.MouseEventHandler<HTMLButtonElement> | void;
}
export default function Button(props: Props) {
  return (
    <div className={props.classname}>
      <button onClick={props.func}>{props.text}</button>
    </div>
  );
}
