import React from "react";

export const EpisodeMarker = ({ episodeNumber }) => {
  const formatNumber = () => {
    if (episodeNumber > 9) {
      return episodeNumber;
    }
    return "0" + episodeNumber; // Hey look, coersion!
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center font-weight-bold"
      style={{
        height: 64,
        width: 64,
        color: "white",
        backgroundColor: "#000066",
        borderRadius: 8,
        fontSize: 22
      }}
    >
      {formatNumber()}
    </div>
  );
};
