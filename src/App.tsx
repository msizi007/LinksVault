import "./App.css";
import NavBar from "./components/navBar";
import Form from "./components/form";
import ListCard from "./components/listCard";
import NotFound from "./components/notFound";
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
  const [isFormVisible, setIsFormVisible] = useState<boolean>(true);
  const [toggleText, setToggleText] = useState<string>("-");

  function toggleForm() {
    const nextVisibility = !isFormVisible;
    setIsFormVisible(nextVisibility);
    setToggleText(nextVisibility ? "-" : "+");
  }

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

  useEffect(() => {
    console.log("changed filter");
    console.log(filter);
  }, [filter]);

  function updateTags(mytags: _Tag[]) {
    const updatedTags = allTags.map((tag) => {
      const match = mytags.find((t) => t.name === tag.name);
      return match ? { ...tag, isActive: true } : tag;
    });
    setTags(updatedTags);
  }

  function addLink() {
    setMode("CREATE");
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
          ? {
              url,
              title,
              description,
              tags: tags.filter((tag) => tag.isActive === true),
            } // replace with new data
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
    setSearch("");
    setMode("SEARCH");
    setFilter([]);
    console.log(mode);

    const lowerTerm = search.toLowerCase();

    const res: _Bookmark[] = bookmarks.filter(
      (b) =>
        b.title.toLowerCase().includes(lowerTerm) ||
        b.description.toLowerCase().includes(lowerTerm) ||
        b.url.toLowerCase().includes(lowerTerm) ||
        b.tags?.some((tag) => tag.name.toLowerCase().includes(lowerTerm))
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
        updateTags,
        allTags,
      }}
    >
      <button className="action-button" onClick={toggleForm}>
        {toggleText}
      </button>
      <NavBar title="Links Vault" />
      <hr />
      <div className="main">
        <div className="col">{isFormVisible && <Form />}</div>
        <div className="col">
          {
            // if searching...
            mode === "SEARCH" ? (
              filter.length > 0 ? (
                // if searching and found...
                <>
                  <p>{filter.length} search results found</p>
                  {filter.map((res, i) => (
                    <ListCard
                      key={i}
                      title={res.title}
                      url={res.url}
                      description={res.description}
                      tags={res.tags}
                    />
                  ))}
                </>
              ) : (
                // searching and not found...
                <NotFound
                  title="No search results found!"
                  subtitle="Make sure you have have typed correctly and try again."
                />
              )
            ) : // not searching....
            bookmarks.length > 0 ? (
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
              <NotFound
                title="No search results found!"
                subtitle="Make sure you have have typed correctly and try again."
              />
            )
          }
        </div>
      </div>
      <Footer />
    </AppContext.Provider>
  );
}
