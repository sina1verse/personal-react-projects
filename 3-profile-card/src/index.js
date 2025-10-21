import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = function () {
  return (
    <div>
      <Card />
    </div>
  );
};

const Card = function () {
  return (
    <div className="frame">
      <Pic />
      <div className="content">
        <Title />
        <Description />
        {/*<Tags /> */}
      </div>
    </div>
  );
};

const Pic = function () {
  return (
    <div className="profPic">
      <img src="my_photo2.jpg" alt="Sina"></img>
    </div>
  );
};

const Title = function () {
  return (
    <div>
      <h2>Sina Rahimi</h2>
    </div>
  );
};

const Description = function () {
  return (
    <div>
      <p>
        Full-stack developer and Cs student. I'm always bussy creating usefull
        Apps and when I'm not doing that, I'm probably playing video games. 🗿
      </p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
