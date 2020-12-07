/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { EpisodeMarker } from "./EpisodeMarker";
import dayjs from "dayjs";
import { useWindowSize } from "../hooks/useWindowSize";

export const EpisodeListItem = ({ episode: item, rating }) => {
  const [, width] = useWindowSize();
  const isSmall = width < 576;
  return (
    <div
      href="#"
      className="d-flex align-items-center mb-1 mb-sm-3 p-2 animate__animated animate__fadeIn"
    >
      <EpisodeMarker episodeNumber={item.number} />
      <div className="d-flex flex-column justify-content-center ml-3">
        <div
          className="lead font-weight-bold"
          style={{ fontSize: isSmall ? 16 : 18 }}
        >
          {item.name}
        </div>
        <div className="d-flex" style={{ fontSize: isSmall ? 14 : 18 }}>
          <div className="text-muted">
            <span className="mr-1" role="img" aria-label="star">
              ⭐
            </span>
            <span className="mr-2 mr-sm-3">{rating}</span>
            <span className="mr-2 mr-sm-3">|</span>
            {dayjs(item.airdate).format("MMMM D, YYYY")}
          </div>
        </div>
      </div>
    </div>
  );
};
