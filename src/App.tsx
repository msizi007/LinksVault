import "./App.css";
// components
import NavBar from "./components/navBar";
import Input from "./components/input";
import TextArea from "./components/textArea";
import { Tag } from "./components/tag";
import Button from "./components/button";
import ListCard from "./components/listCard";
import NoLinks from "./components/noLinks";
// states
import { useState } from "react";
import { AppContext } from "./components/appContext";
// models
import type { _Link, _Tag } from "./models/appModels";

// TODO: Add (dev) branch and work on dev...
// TODO: Add functionality and states (useState, useEffect)

// interface Tag{
const allTags = [
  { name: "Tech", isActive: false },
  { name: "News", isActive: false },
  { name: "Production", isActive: false },
  { name: "Education", isActive: false },
  { name: "Business", isActive: false },
  { name: "UI/UX", isActive: false },
  { name: "Sports", isActive: false },
  { name: "Entertainment", isActive: false },
  { name: "AI", isActive: false },
  { name: "Health", isActive: false },
];

export function App() {
  const [title, setTitle] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<_Tag[]>(allTags);
  const [links, setLinks] = useState<_Link[]>([]);
  // const [buttonText, setButtonText] = useState("");

  function toggleTag(myTag: _Tag) {
    console.log("TOGGLE TAG CALLED!");

    const updatedTags: _Tag[] = allTags.map((tag) =>
      tag.name === myTag.name ? { ...tag, isActive: !tag.isActive } : tag
    );
    setTags(updatedTags);
    console.log(myTag);
  }

  function addLink(): void {
    const newLink = {
      link: link,
      title: title,
      description: description,
    };
    setLink("");
    setTitle("");
    setDescription("");

    setLinks([...links, newLink]);
  }

  return (
    <AppContext.Provider
      value={{
        addLink,
      }}
    >
      <NavBar title="Links Vault" />
      <hr />
      <div className="main">
        <div className="col">
          <Input
            classname="input"
            placeholder="Title..."
            value={title}
            func={setTitle}
          />
          <Input
            classname="input"
            placeholder="Link(URL)..."
            value={link}
            func={setLink}
          />
          <TextArea
            classname="text-area"
            placeholder="Description..."
            rows={4}
            value={description}
            func={setDescription}
          />
          <div className="tags">
            {tags.map((tag) => (
              <Tag value={tag} onToggle={toggleTag} />
            ))}
          </div>
          <Button classname="add-link" text="Add Link" func={addLink} />
        </div>
        <div className="col">
          {links.length > 0 ? (
            links.map((link) => (
              <ListCard
                title={link.title}
                link={link.link}
                description={link.description}
              />
            ))
          ) : (
            <NoLinks />
          )}
        </div>
      </div>
    </AppContext.Provider>
  );
}
