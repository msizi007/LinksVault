import type { _Tag } from "../models/appModels";

interface TagProps {
  value: _Tag;
  onToggle(myTag: _Tag): void;
}
export function Tag(props: TagProps) {
  const activateTag = (): void => {
    // change color of tag when clicked
    const tagElement = document.querySelector(`#${props.value.name}`);
    if (tagElement) {
      tagElement.classList.toggle("active");
    }
    props.onToggle(props.value);
  };
  return (
    <span id={`${props.value}`} className="tag" onClick={activateTag}>
      {props.value.name}
    </span>
  );
}

interface Props {
  value: _Tag;
}

export function FixedTag(props: Props) {
  return (
    <span id={`${props.value}`} className="fixed-tag">
      {props.value.name}
    </span>
  );
}
