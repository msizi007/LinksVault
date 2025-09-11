import Icon from "./icon";
import urlIcon from "../assets/icons/links1.png";
import { useContext } from "react";
import { AppContext } from "./appContext";
import { FixedTag } from "./tag";
import type { _Tag } from "./types";
import { useEffect } from "react";

interface Props {
  title: string;
  url: string;
  description: string;
  tags?: _Tag[];
}

export default function ListCard(props: Props) {
  const context = useContext(AppContext);
  const {
    setMode,
    setUpdated,
    setUrl,
    setTitle,
    setDescription,
    deleteLink,
    updateTags,
    tags,
    setTags,
  } = context;

  // Update selectedTags when props.tags change
  useEffect(() => {
    setTags(tags);
    console.log("rendered");
  }, [tags, setTags]);

  function editLink() {
    setMode("UPDATE");
    setUpdated(props.url);
    setUrl(props.url);
    setTitle(props.title);
    setDescription(props.description);
    // TODO: set tags too... NOTE: active tags noeed to be set... update all tags to include active ones...

    updateTags(props.tags);
  }

  return (
    <div className="list-card">
      <div className="col-2">
        <Icon src={urlIcon} alt="url icon" size={60} />
      </div>
      <div className="col-10">
        <div className="row">
          <div className="col-col">
            <h4>{props.title}</h4>
            <a href={props.url}>{props.url}</a>
          </div>
          <div className="col-row">
            <button className="btn-edit" onClick={editLink}>
              Edit
            </button>
            <button
              className="btn-delete"
              onClick={() => {
                deleteLink(props.url);
              }}
            >
              Delete
            </button>
          </div>
        </div>

        <p>{props.description}</p>
        <div className="tags">
          {props.tags?.map((tag, i) => (
            <FixedTag key={i} value={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
