import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const programmingSkills = [
  { skill: "JavaScript", level: "advanced", color: "#F7DF1E" },
  { skill: "HTML", level: "advanced", color: "#E34F26" },
  { skill: "CSS", level: "intermediate", color: "#1572B6" },
  { skill: "React", level: "intermediate", color: "#61DAFB" },
  { skill: "Node.js", level: "intermediate", color: "#68A063" },
  { skill: "C", level: "beginner", color: "#A8B9CC" },
  { skill: "SQL", level: "beginner", color: "#336791" },
];

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
        <Tags />
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

const Tags = function () {
  return (
    <div className="tags_container">
      {programmingSkills.map((quality) => (
        <Tag quality={quality} />
      ))}
    </div>
  );
};

const Tag = function ({ quality }) {
  return (
    <div className="tag" style={{ backgroundColor: quality.color }}>
      {quality.skill}
      {quality.level === "advanced" && "💪"}
      {quality.level === "intermediate" && "👍"}
      {quality.level === "beginner" && "👶"}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
