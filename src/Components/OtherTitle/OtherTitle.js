import React from "react";

// styles
import "./OtherTitle.scss";

function OtherTitle({ heading, text }) {
  return (
    <div>
      <p className="text">{heading ? heading : ""}</p>
      <p>{text ? text : ""}</p>
    </div>
  );
}

export default OtherTitle;
