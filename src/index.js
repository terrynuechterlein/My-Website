import ReactDOM from "react-dom/client";
import App from "./App";
import { ModalProvider } from "./context/modal-contex";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<ModalProvider><App /></ModalProvider>);
