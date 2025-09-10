import "./App.css";
import NavBar from "./components/navBar";
import Form from "./components/form";
import ListCard from "./components/listCard";
import NoLinks from "./components/noLinks";
import { useState } from "react";
import type { _Bookmark, _Tag, CrudMode } from "./components/types";
import { AppContext } from "./components/appContext";

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
  const [url, setUrl] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<_Tag[]>(allTags);
  const [bookmarks, setBookmarks] = useState<_Bookmark[]>([]);
  const [mode, setMode] = useState<CrudMode>("CREATE");
  // another state to kkep track of updated link
  const [updated, setUpdated] = useState<string>("");

  function toggleTag(myTag: _Tag) {
    console.log("TOGGLE TAG CALLED!");

    const updatedTags: _Tag[] = tags.map((tag) =>
      tag.name === myTag.name ? { ...tag, isActive: !tag.isActive } : tag
    );
    setTags(updatedTags);
    console.log(myTag);
  }

  function addLink() {
    const newBookmark = {
      url: url,
      title: title,
      description: description,
    };
    console.log("ADD LINK. FUNCTION CALL...");

    setUrl("red");
    setTitle("red");
    setDescription("red");

    setBookmarks([...bookmarks, newBookmark]);
  }

  function deleteLink(url: string) {
    console.log("DELETE FUNCTION...");
    setBookmarks(bookmarks.filter((item) => (item.url === url ? false : true)));
  }

  function updateLink(url: string): void {
    console.log("UPDATED: " + url);

    setBookmarks((prev) =>
      prev.map((item) =>
        item.url === url
          ? { ...item, title, description } // replace with new data
          : item
      )
    );

    setMode("CREATE");
    setUpdated("");
  }

  return (
    <AppContext.Provider
      value={{
        title,
        setTitle,
        url,
        setUrl,
        bookmarks,
        setBookmarks,
        description,
        setDescription,
        tags,
        setTags,
        mode,
        setMode,
        updated,
        setUpdated,
        toggleTag,
        addLink,
        updateLink,
        deleteLink,
      }}
    >
      <NavBar title="Links Vault" />
      <hr />
      <div className="main">
        <div className="col">
          <Form />
        </div>
        <div className="col">
          {bookmarks.length > 0 ? (
            bookmarks.map((bookmark, i) => (
              <ListCard
                key={i}
                title={bookmark.title}
                url={bookmark.url}
                description={bookmark.description}
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
