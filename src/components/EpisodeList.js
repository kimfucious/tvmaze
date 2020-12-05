import React from "react";
import { EpisodeListItem } from "./EpidodeListItem";

export const EpisodeList = ({ episodes, rating }) => {
  const renderEpisodes = () =>
    episodes.map((item) => (
      <EpisodeListItem episode={item} key={item.id} rating={rating} />
    ));

  return (
    <div className="animate__animated animate__fadeIn mt-3">
      {episodes.length ? renderEpisodes() : null}
    </div>
  );
};
