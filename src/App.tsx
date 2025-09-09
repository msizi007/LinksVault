import "./App.css";
import NavBar from "./components/navBar";
import Input from "./components/input";
import TextArea from "./components/textArea";
import Tag from "./components/tag";
import Button from "./components/button";

const tags: string[] = [
  "Tech",
  "News",
  "Production",
  "Education",
  "Business",
  "UI/UX",
  "Sports",
  "Entertainment",
  "AI",
  "Health",
];

function App() {
  return (
    <>
      <NavBar title="Links Vault" />
      <hr />
      <div className="main">
        <div className="col">
          <Input classname="input" placeholder="Title..." />
          <Input classname="input" placeholder="Link(URL)..." />
          <TextArea
            classname="text-area"
            placeholder="Description..."
            rows={4}
          />
          <div className="tags">
            {tags.map((tag) => (
              <Tag value={tag} />
            ))}
          </div>
          <Button classname="add-link" text="Add Link" />
        </div>
        <div className="col">
          <Input placeholder="" />
        </div>
      </div>
    </>
  );
}

export default App;
