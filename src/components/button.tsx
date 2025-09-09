interface Props {
  classname?: string;
  text: string;
}
export default function Button({ classname, text }: Props) {
  return (
    <div className={classname}>
      <button>{text}</button>
    </div>
  );
}
