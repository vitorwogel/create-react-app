import React from "react"
import Course from "./components/course"
import "./App.css"
import witCrest from "./images/wit_crest.png"

const App = () => {

  const modules = [
    {
        name: "Web App Dev 2",
        noLectures: 1,
        noPracticals: 2
    },
    {
        name: "Algorithms",
        noLectures: 2,
        noPracticals: 3
    },
      {
        name: "Database Systems",
        noLectures: 2,
        noPracticals: 2
    },
    {
        name: "DevOps",
        noLectures: 2,
        noPracticals: 2
    },
    {
        name: "Data Mining",
        noLectures: 2,
        noPracticals: 3
    }
   ];
  const name = "HDip Applied Computing"

  return (
    <>
      <header className="App-header">
        <img className="center" src={witCrest} alt="logo" />
      </header>
      <div className="course">
        <Course title={name} modules={modules} />
      </div>
    </>
  );
};

export default App
