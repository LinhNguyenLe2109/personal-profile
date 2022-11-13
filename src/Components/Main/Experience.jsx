import React from "react";
import { useState } from "react";
import Breaker from "../UI/Breaker";
import MainHeading from "../UI/MainHeading";
import styles from "./Experience.module.css";

function Experience() {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
  const workplaces = [
    {
      place: "TDSB",
      position: "Junior Web Developer",
      description: ["abc", "cdf"],
      timeStart: new Date(2022, 7, 22),
      timeEnd: new Date(2022, 11, 23),
    },
    {
      place: "cdf",
      position: "Junior Web Developer",
      description: ["abc", "cdf", "abc", "cdf"],
      timeStart: new Date(2022, 7, 22),
      timeEnd: new Date(2022, 11, 23),
    },
    {
      place: "abc",
      position: "Junior Web Developer",
      description: [
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem illum nostrum nam rerum nisi at dolorem cumque, laudantium dicta! Error molestiae quia reiciendis delectus, fugit exercitationem vero labore vitae dolorum culpa ab, reprehenderit molestias odio, incidunt nostrum magni fuga aperiam sequi voluptatibus maxime. Possimus eaque ",
        "cdf",
      ],
      timeStart: new Date(2022, 7, 22),
      timeEnd: new Date(2022, 11, 23),
    },
    {
      place: "Seneca College",
      position: "Student Operation Support",
      description: [
        "Assist new and current students coming to the Campus",
        "Make sure everyone coming to the campus follow the safety policy.",
        "Work in heavy-teamwork environment",
        "Got asked to return to the job twice",
      ],
      timeStart: new Date(2021, 8, 22),
      timeEnd: new Date(2022, 7, 22),
    },
    {
      place: "The Home Depot",
      position: "Seasonal Sales Associate",
      description: [
        "Work and communicate with team to deliver exceptional customer service",
        "Assist and guide customers to the correct articles",
        "Communicate to understand customer’s need",
        "Received positive feedbacks from employers",
      ],
      timeStart: new Date(2021, 3, 10),
      timeEnd: new Date(2022, 7, 1),
    },
  ];
  const [currentActiveDesc, setCurrentActiveDesc] = useState(workplaces[0]);
  const convertDateToString = (date) => {
    var year = date.toLocaleString("default", { year: "numeric" });
    var month = date.toLocaleString("default", { month: "2-digit" });
    var day = date.toLocaleString("default", { day: "2-digit" });
    // Generate yyyy-mm-dd date string
    var formattedDate = day + "-" + month + "-" + year;
    return formattedDate;
  };
  const changeActiveDesc = (id) => {
    setCurrentActiveDesc(
      workplaces.find((workplaces) => workplaces.place === id)
    );
  };
  return (
    <section id="experience" className={`container-fluid ${styles.section}`}>
      <MainHeading>I've worked for</MainHeading>
      <Breaker className="w-75 mx-auto"></Breaker>
      <div
        id={styles.experience}
        className="col-xl-7 col-9 mx-auto d-lg-flex d-block border border-success border-5 p-3 rounded-4 bg-dark text-light"
      >
        <div
          id={styles.list}
          className="d-flex flex-lg-column justify-content-center col-lg-3 col mx-lg-0 mb-3 mb-lg-0 pb-sm-0 pb-3"
        >
          {workplaces.map((workplace) => (
            <button
              id={workplace.place}
              key={workplace.place}
              type="button"
              className="btn btn-primary d-inline rounded-0 my-lg-1 mx-lg-0 mx-1"
              onClick={(e) => changeActiveDesc(e.target.id)}
            >
              {workplace.place}
            </button>
          ))}
        </div>
        <div id={styles["active-desc"]} className="border-warning">
          <h3>{currentActiveDesc.position}</h3>
          <p>
            From {convertDateToString(currentActiveDesc.timeStart)} to{" "}
            {convertDateToString(currentActiveDesc.timeEnd)}
          </p>
          <ul>
            {currentActiveDesc.description.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
