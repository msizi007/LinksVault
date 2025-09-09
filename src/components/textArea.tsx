interface Props {
  classname?: string;
  placeholder: string;
  rows: number;
}
export default function TextArea({ classname, placeholder, rows }: Props) {
  return (
    <textarea
      className={classname}
      placeholder={placeholder}
      rows={rows}
    ></textarea>
  );
}
