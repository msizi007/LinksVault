import { useContext } from "react";
import { AppContext } from "./appContext";
import Input from "./input";
import TextArea from "./textArea";
import { Tag } from "./tag";
import Button from "./button";

export default function Form() {
  const context = useContext(AppContext);
  const {
    title,
    setTitle,
    tags,
    url,
    setUrl,
    toggleTag,
    addLink,
    mode,
    updateLink,
    updated,
  } = context;
  return (
    <>
      <Input
        classname="input"
        placeholder="Title..."
        value={title}
        setValue={setTitle}
      />
      <Input
        classname="input"
        placeholder="Link(URL)..."
        value={url}
        setValue={setUrl}
      />
      <TextArea classname="text-area" placeholder="Description..." rows={4} />
      <div className="tags">
        {tags.map((tag, i) => (
          <Tag key={i} value={tag} onToggle={toggleTag} />
        ))}
      </div>
      {mode === "CREATE" ? (
        <Button classname="add-link" text="Add Link" func={addLink} />
      ) : (
        <Button
          classname="add-link"
          text="Update Link"
          func={() => {
            updateLink(updated);
          }}
        />
      )}
    </>
  );
}
