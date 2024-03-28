import React from "react";
import { Link } from "react-router-dom";

function Tabs(props) {
  const { content, backdrop, link } = props;

  return (
    <div className="w-100 border rounded mx-auto Tab-Image-Container">
      <Link className="nav-link w-75 mx-auto" to={link}>
        <img src={backdrop} className="img-fluid" alt="Responsive image" />
      </Link>
    </div>
  );
}

export default Tabs;
