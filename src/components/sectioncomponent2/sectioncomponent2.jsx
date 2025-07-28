import React from "react";
import "./sectioncomponent2.css";
function sectioncomponent2({ them, information }) {
  return (
    <>
      <div className="sectioncomponent2-div">
        <p className="title2">{them}</p>
        <div className="feature-line"></div>
        <p className="information">{information}</p>
      </div>
    </>
  );
}

export default sectioncomponent2;
