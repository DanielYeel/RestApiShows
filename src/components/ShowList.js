import React from "react";
import ShowCard from "./ShowCard";
import "./ShowList.css";

function ShowList({ shows }) {
  return (
    <div className="show-list">
      {shows.map((show, index) => (
        <ShowCard
          key={index}
          name={show.name}
          photo={show.photo}
          premiereDate={show.premiereDate}
          summary={show.summary}
          genres={show.genres}
        />
      ))}
    </div>
  );
}

export default ShowList;