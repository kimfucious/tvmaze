import React from "react";
import { useWindowSize } from "../hooks/useWindowSize";

export const EpisodeMarker = ({ episodeNumber }) => {
  const [, width] = useWindowSize();
  const isSmall = width < 576;
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
        height: isSmall ? 48 : 64,
        minHeight: isSmall ? 48 : 64,
        width: isSmall ? 48 : 64,
        minWidth: isSmall ? 48 : 64,
        color: "white",
        backgroundColor: "#000066",
        borderRadius: 8,
        fontSize: isSmall ? 18 : 22
      }}
    >
      {formatNumber()}
    </div>
  );
};
