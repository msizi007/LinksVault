interface Props {
  classname?: string;
  placeholder: string;
}

export default function Input({ classname, placeholder }: Props) {
  return <input className={classname} type="text" placeholder={placeholder} />;
}
