import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import BrainContextProvider from "./context/BrainContextProvider";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <BrainContextProvider>
      <App />
    </BrainContextProvider>
  // </React.StrictMode>
);
