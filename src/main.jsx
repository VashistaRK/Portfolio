import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import "./index.css";
import App from "./App"; // Assuming App is the root component

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {" "}
    {/* Wrap your app with BrowserRouter */}
    <App />
  </BrowserRouter>
);
