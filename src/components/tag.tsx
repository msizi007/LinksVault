import { useContext } from "react";
import type { _Tag } from "./types";
import { AppContext } from "./appContext";

interface TagProps {
  value: _Tag;
}
export function Tag(props: TagProps) {
  const context = useContext(AppContext);

  const { tags, setTags } = context;

  function toggle() {
    console.log("toggle...", props.value.name, props.value.isActive);
    console.log(
      tags.map((tag) => {
        return tag.name === props.value.name
          ? { name: props.value.name, isActive: !tag.isActive }
          : tag;
      })
    );

    setTags(
      tags.map((tag) => {
        return tag.name === props.value.name
          ? { name: props.value.name, isActive: !tag.isActive }
          : tag;
      })
    );
  }
  return (
    <span
      className={`tag ${props.value.isActive ? "active" : ""}`}
      onClick={toggle}
    >
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
