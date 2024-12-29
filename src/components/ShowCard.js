import React from "react";
import ShowDate from "./ShowDate";
import "./ShowCard.css";

function ShowCard({ name, photo, premiereDate, summary, genres}) {
  const plainTextSummary = summary.replace(/<\/?[^>]+(>|$)/g, "");

  return (
    <div className="show-card">
      <img className="show-photo" src={photo} alt={name} />
      <div className="show-details">
        <h3 className="show-name">{name}</h3>
        <p className="show-genres">{genres}</p>
        <ShowDate premiereDate={premiereDate} />
        <p className="show-summary">{plainTextSummary}</p>
      </div>
    </div>
  );
}

export default ShowCard;