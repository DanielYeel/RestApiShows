import React from "react";

function ShowDate({ premiereDate }) {
  const formattedDate = new Date(premiereDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return <div className="show-premiere-date">Premiered: {formattedDate}</div>;
}

export default ShowDate;