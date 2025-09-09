import Input from "./input";
import Icon from "./icon";
import searchIcon from "../assets/icons/search_icon.png";

export default function SearchBar() {
  return (
    <div className="searchbar">
      <Input placeholder="search here..." />
      <button className="search-button">
        <Icon src={searchIcon} alt="search-icon" size={20} />
      </button>
    </div>
  );
}
