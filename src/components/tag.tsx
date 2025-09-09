interface Props {
  value: string;
}
export function Tag({ value }: Props) {
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

export function FixedTag({ value }: Props) {
  return (
    <span id={`${value}`} className="fixed-tag">
      {value}
    </span>
  );
}
