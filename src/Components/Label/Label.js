import React from "react";

// styles
import "./Label.scss";

function Label({ label, author }) {
  return <h1 className="title-text">{`${label} by ${author}`}</h1>;
}

export default Label;
