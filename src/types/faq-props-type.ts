export type FAQObject = {
  source: string;
  pdfName: string;
  link: string;
};

export type FAQProps = {
  FAQArray: Array<FAQObject>;
  title: string;
};
