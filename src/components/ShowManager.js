import React, { useEffect, useState } from "react";
import ShowList from "./ShowList";
import "../App.css";

function ShowManager() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch("https://api.tvmaze.com/shows");
        const data = await response.json();

        const formattedShows = data.map((show) => ({
          name: show.name,
          photo: show.image.medium,
          premiereDate: show.premiered,
          summary: show.summary,
          genres: show.genres.join(", "),
        }));

        setShows(formattedShows);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div className="show-manager">
      <ShowList shows={shows} />
    </div>
  );
}

export default ShowManager;
