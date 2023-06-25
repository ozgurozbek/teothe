import { pdfjs, Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function GeneralTab() {
  return (
    <section>
      <Document file="https://ozgurozbek.github.io/dnd/books/TheseClovers.pdf">
        <Page />
        <Page />
        <Page />
        <Page />
      </Document>
    </section>
  );
}
