import Icon from "./icon";
import urlIcon from "../assets/icons/links1.png";
//import { AppContext } from "./appContext";

//import { useContext } from "react";

import { FixedTag } from "./tag";
import type { _Tag } from "../models/appModels";

interface Props {
  title: string;
  link: string;
  description: string;
  tags?: _Tag[];
}

export default function ListCard({ title, link, description, tags }: Props) {
  // const context = useContext(AppContext);

  return (
    <div className="list-card">
      <div className="col-2">
        <Icon src={urlIcon} alt="url icon" size={60} />
      </div>
      <div className="col-10">
        <div className="row">
          <div className="col-col">
            <h4>{title}</h4>
            <a href={link}>{link}</a>
          </div>
          <div className="col-row">
            <button className="btn-edit">Edit</button>
            <button className="btn-delete">Delete</button>
          </div>
        </div>

        <p>{description}</p>
        <div className="tags">
          {tags?.map((tag) => (
            <FixedTag value={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
