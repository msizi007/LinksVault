import SearchBar from "./searchBar";

interface Props {
  title: string;
}

export default function NavBar({ title }: Props) {
  return (
    <div className="navbar">
      <h2>{title}</h2>
      <SearchBar />
    </div>
  );
}
