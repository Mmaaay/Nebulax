import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux"; // Added import
import store from "./redux/store"; // Added import
import Modalprovider from "./providers/Modalprovider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Modalprovider>
        <App />
      </Modalprovider>
    </Provider>
  </StrictMode>
);
