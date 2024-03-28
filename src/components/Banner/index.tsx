import React from "react";

export function Banner(props) {
  const { image } = props;
  return (
    <div className="w-100">
      <img src={image} className="img-fluid" alt="Responsive image" />
      {/* <div className="banner-overlay position-absolute zindex-fixed">
        <h1 className="text-white font-weight-bold">
          {" "}
          Bringing Color to your Home{" "}
        </h1>
        <h2 className="text-white font-weight-light"> Est 2008 </h2>
      </div> */}
    </div>
  );
}
