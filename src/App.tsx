import "./App.css";
import NavBar from "./components/navBar";
import Form from "./components/form";
import ListCard from "./components/listCard";
import NoLinks from "./components/noLinks";
import { useEffect, useState } from "react";
import type { _Bookmark, _Tag, CrudMode } from "./components/types";
import { AppContext } from "./components/appContext";
import Footer from "./components/footer";
import { getLinks, setLinks } from "./components/utils/storage";

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
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<_Bookmark[]>([]);

  function toggleTag(myTag: _Tag) {
    const updatedTags: _Tag[] = tags.map((tag) =>
      tag.name === myTag.name ? { ...tag, isActive: !tag.isActive } : tag
    );
    setTags(updatedTags);
  }

  useEffect(() => {
    const vault = getLinks();
    if (vault.length > 0) {
      setBookmarks(vault);
    }
  }, []);

  useEffect(() => {
    setLinks(bookmarks);
    setFilter([]);
  }, [bookmarks]);

  function addLink() {
    const newBookmark = {
      url: url,
      title: title,
      description: description,
      tags: tags.filter((tag) => tag.isActive === true),
    };

    setUrl("");
    setTitle("");
    setDescription("");
    setTags(allTags);

    setBookmarks([...bookmarks, newBookmark]);
  }

  function deleteLink(myUrl: string) {
    setBookmarks(
      bookmarks.filter((item) => (item.url === myUrl ? false : true))
    );
  }

  function updateLink(myUrl: string): void {
    setBookmarks((prev) =>
      prev.map((item) =>
        item.url === myUrl
          ? { url, title, description, tags } // replace with new data
          : item
      )
    );

    setUrl("");
    setTitle("");
    setDescription("");

    setMode("CREATE");
    setUpdated("");
  }

  function searchItem() {
    const lowerTerm = search.toLowerCase();

    const res: _Bookmark[] = bookmarks.filter(
      (b) =>
        b.title.toLowerCase().includes(lowerTerm) ||
        b.description.toLowerCase().includes(lowerTerm) ||
        b.url.toLowerCase().includes(lowerTerm)
    );

    // bad logic
    setFilter(res);
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
        search,
        setSearch,
        searchItem,
      }}
    >
      <NavBar title="Links Vault" />
      <hr />
      <div className="main">
        <div className="col">
          <Form />
        </div>
        <div className="col">
          {filter.length > 0 ? (
            <>
              <p>{filter.length} search results found</p>
              {filter.map((res, i) => (
                <ListCard
                  key={i}
                  title={res.title}
                  url={res.url}
                  description={res.description}
                />
              ))}
            </>
          ) : bookmarks.length > 0 ? (
            <>
              {bookmarks.map((bookmark, i) => (
                <ListCard
                  key={i}
                  title={bookmark.title}
                  url={bookmark.url}
                  description={bookmark.description}
                  tags={bookmark.tags}
                />
              ))}
            </>
          ) : (
            <NoLinks />
          )}
        </div>
      </div>
      <Footer />
    </AppContext.Provider>
  );
}
