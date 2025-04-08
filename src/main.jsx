import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import { ExtensionProvider } from "./context/context";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ExtensionProvider>
      <App />
    </ExtensionProvider>
  </StrictMode>
);
