import React from "react";
// import { Link } from "react-router-dom";
import "./css components/meetTheTeam.css";
//meet the team section
const MeetTheTeam = ({
  teammate: {
    img,
    firstName,
    lastName,
    age,
    city,
    title,
    socialMedia: { facebook, linkedin, gitHub, email },
  },
}) => {
  return (
    <>
      <div>
        <div
          className="team-card bg-dark pb-5
"
        >
          <img
            className="rounded"
            src={img}
            alt="avatar"
            style={{ width: "18.8em", height: "17em" }}
          />
          <h2 className="text-white mt-4 mb-3">
            {firstName}&nbsp;{lastName}
          </h2>

          <p className="title">{title}</p>
          <p className="text-white">{city}</p>
          <p className="text-white mb-5">{age}</p>
          <a href={`mailto:${email}`} target="blank">
            <i className="bi bi-envelope text-white m-2" />
          </a>
          <a href={gitHub} target="blank">
            <i className="bi bi-github text-white m-2" />
          </a>
          <a href={linkedin} target="blank">
            <i className="bi bi-linkedin text-white m-2" />
          </a>
          <a href={facebook} target="blank">
            <i className="bi bi-facebook text-white m-2" />
          </a>
        </div>
      </div>
    </>
  );
};

export default MeetTheTeam;
