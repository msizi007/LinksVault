import Icon from "./icon";
import urlIcon from "../assets/icons/url.png";
import editIcon from "../assets/icons/pencil.png";
import deleteIcon from "../assets/icons/bin.png";

import { FixedTag } from "./tag";

interface Props {
  title: string;
  link: string;
  description: string;
  tags?: string[];
}

export default function ListCard({ title, link, description, tags }: Props) {
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
            <button className="btn-edit">
              <Icon src={editIcon} alt="edit icon" size={20} />
            </button>
            <button className="btn-delete">
              <Icon src={deleteIcon} alt="delete icon" size={20} />
            </button>
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
