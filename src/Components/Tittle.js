import React from "react";

function Tittle({ title, index, indexed }) {
  return (
    <div className="title">
      <h3>
        {indexed && <span className="index">{index}. </span>}
        <span className="title-c">{title}</span>
        <hr />
      </h3>
    </div>
  );
}

export default Tittle;
