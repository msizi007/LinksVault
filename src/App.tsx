import "./App.css";
import NavBar from "./components/navBar";
import Input from "./components/input";
import TextArea from "./components/textArea";

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
        </div>
        <div className="col">....</div>
      </div>
    </>
  );
}

export default App;
