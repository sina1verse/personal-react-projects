import React from "react";
import ReactDom from "react-dom/client";

function App() {
  return <h1>Pizza Menu</h1>;
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
