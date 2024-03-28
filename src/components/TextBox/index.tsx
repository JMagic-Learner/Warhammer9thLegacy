import React from "react";
import { TextBoxProps } from "../../Types/text-box-props-type";

export const TextBox = (props: TextBoxProps) => {
  const { paragraph1, paragraph2, paragraph3, alignment, image, title } = props;

  if (alignment === "left") {
    return (
      <div className="w-100 d-flex mt-1">
        <img src={image} className="img w-50" alt="Responsive image" />
        <div className="w-50">
          <h2> {title}</h2>
          <div className="w-75 mx-auto">
            <p> {paragraph1} </p>
          </div>
          <div className="w-75 mx-auto">
            <p> {paragraph2} </p>
          </div>
          <div className="w-75 mx-auto">
            <p> {paragraph3} </p>
          </div>
        </div>
      </div>
    );
  }

  if (alignment === "right") {
    return (
      <div className="w-100 d-flex mt-1">
        <div className="w-50">
          <h2> Title </h2>
          <div className="w-75 mx-auto">
            <p> {paragraph1} </p>
          </div>
          <div className="w-75 mx-auto">
            <p> {paragraph2} </p>
          </div>
          <div className="w-75 mx-auto">
            <p> {paragraph3} </p>
          </div>
        </div>
        <img src={image} className="img w-50" alt="Responsive image" />
      </div>
    );
  }
};
