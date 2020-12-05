/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { EpisodeMarker } from "./EpisodeMarker";
import dayjs from "dayjs";

export const EpisodeListItem = ({ episode: item }) => {
  return (
    <div href="#" className="d-flex mb-3 p-2 animate__animated animate__fadeIn">
      <EpisodeMarker episodeNumber={item.number} />
      <div className="d-flex flex-column justify-content-center ml-3">
        <div className="lead font-weight-bold" style={{ fontSize: 18 }}>
          {item.name}
        </div>
        <div className="d-flex">
          <div className="text-muted">
            <span role="img" aria-label="star">
              ⭐
            </span>{" "}
            <span className="mr-3">starz</span>
            <span className="mr-3">|</span>
            {dayjs(item.airdate).format("MMMM D, YYYY")}
          </div>
        </div>
      </div>
    </div>
  );
};
