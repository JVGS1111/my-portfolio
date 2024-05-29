import { Home } from "./pages/Home"
///@ts-ignore
import * as pdfjsLib from "../node_modules/pdfjs-dist/build/pdf";
///@ts-ignore
import * as pdfjsWorker from "../node_modules/pdfjs-dist/build/pdf.worker.mjs";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function App() {

  return (
    <>
      <Home />
    </>
  )
}

export default App
