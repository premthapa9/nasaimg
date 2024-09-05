import ReactDOM from "react-dom/client";
import App from "./App";
import ApodComp from "./context/apodcontext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ApodComp>
      <App />
    </ApodComp>
  </BrowserRouter>
);
