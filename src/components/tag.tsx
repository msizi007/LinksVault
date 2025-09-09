interface Props {
  value: string;
}
export default function Tag({ value }: Props) {
  const activateTag = (): void => {
    // change color of tag when clicked
    const tagElement = document.querySelector(`.tag#${value}`);
    if (tagElement) {
      tagElement.classList.toggle("active");
    }
  };
  return (
    <span id={`${value}`} className="tag" onClick={activateTag}>
      {value}
    </span>
  );
}
