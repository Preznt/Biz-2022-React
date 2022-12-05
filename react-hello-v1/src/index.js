import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";

const AppWithCallback = () => {
  return <App tab="home" />;
};

const rootConatiner = document.querySelector("#root");
const root = createRoot(rootConatiner);
root.render(<AppWithCallback />);
