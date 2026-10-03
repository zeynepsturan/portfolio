import { cvPdf } from "../../../data/assets";

export default function CVWindow() {
  return (
    <iframe
      src={cvPdf}
      title="Resume PDF"
      className="w-full h-full min-h-0 border-0 bg-white"
    />
  );
}
