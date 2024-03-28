import React from "react";
import { FAQObject, FAQProps } from "../../Types/faq-props-type";

export const GenericFAQColumn = (props: FAQProps) => {
  const { FAQArray, title } = props;
  return (
    <div className="faq-card">
      <h2> {title} </h2>

      {FAQArray.map((pdf: FAQObject) => {
        return (
          <div className="card">
            <a href={require(`../../FAQ/${pdf.source}`)} download={pdf.pdfName}>
              {pdf.link}
            </a>
          </div>
        );
      })}
    </div>
  );
};
