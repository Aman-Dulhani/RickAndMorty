import React from "react";
import "./styles.css";

const Episode = ({ name, airDate, episodeCode }) => (
  <div className="episodeCards">
    <h2 style={{ fontSize: "20px" }}>
      {episodeCode}: {name}
    </h2>
    <span>Aired: {airDate} </span>
  </div>
);

export default Episode;
