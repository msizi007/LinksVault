interface Props {
  src: string;
  alt: string;
  size: number;
}

export default function Icon({ src, alt, size }: Props) {
  return (
    <div className="icon">
      <img src={src} alt={alt} width={`${size}px`} />
    </div>
  );
}
