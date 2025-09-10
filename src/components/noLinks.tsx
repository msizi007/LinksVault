import React from "react";
import nothing from "../assets/icons/nothing.png";
import Icon from "./icon";

export default function NoLinks() {
  return (
    <div className="nothing">
      <h2>Oops! No Available links found.</h2>
      <p>All available links will be displayed here..</p>
      <Icon src={nothing} alt="nothing found" size={90} />
    </div>
  );
}
