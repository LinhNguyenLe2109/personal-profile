import React from "react";
import { useState } from "react";
import Breaker from "../UI/Breaker";
import MainHeading from "../UI/MainHeading";
import styles from "./Experience.module.css";

function Experience() {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
  const workplaces = [
    { 
      // capital project and student census
      place: "TDSB",
      position: "Junior Web Developer",
      description: ["Updated, modified existing webpages and created new pages based on requests", "Communicated, collaborated with team to fix bugs, to understand the requestor's needs, to get assistance from the senior", "Developed a module to display data from OracleDB and SQL server", "Helped and delivered two front-end projects in fast manner"],
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
    {
      place: "Yummy Korean Restaurant",
      position: "Crew member",
      description: ["Communicated effectively with staff members to increase productivity", "Made sure the customers have positive experience and feedback.", "Worked in physical-demanding environment that required the ability to multitask"],
      timeStart: new Date(2021, 8, 27),
      timeEnd: new Date(2022, 0, 6),
    },
    {
      place: "SmartBE English Center",
      position: "English Teaching Assistant",
      description: [
        "Used, maintained, set up computers, audio-visual equipment like projectors and speakers, and other equipment. Assisted students, teachers with hardware and software usage", "Distributed tests and homework, graded results using answer Excel 2016 to assess students’ performance and report back to the center and their parents.", "Tutored and assisted children in class, reinforced learning concepts presented by teachers. Addressed any concerns from students and their parents on daily basis."
      ],
      timeStart: new Date(2020, 8, 27),
      timeEnd: new Date(2021, 6, 18),
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
              <li key={idx} className="mb-3">{desc}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
