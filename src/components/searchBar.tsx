import Input from "./input";
import Icon from "./icon";
import searchIcon from "../assets/icons/search_icon.png";
import { useContext } from "react";
import { AppContext } from "./appContext";

export default function SearchBar() {
  const context = useContext(AppContext);
  const { search, setSearch, searchItem } = context;
  return (
    <div className="searchbar">
      <Input placeholder="search here..." value={search} setValue={setSearch} />
      <button className="search-button" onClick={searchItem}>
        <Icon src={searchIcon} alt="search-icon" size={20} />
      </button>
    </div>
  );
}
