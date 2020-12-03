import React from "react";

export const ShowDetail = ({ show: item }) => {
  const sizing = 1;
  return (
    <div className="d-flex">
      <div className="d-flex flex-column" name="left-side">
        <div name="image">
          <img
            alt={item.show.name}
            src={item.show.image.original}
            style={{ borderRadius: 8 }}
            width={210 * sizing}
            height={295 * sizing}
          />
        </div>
        <div name="title"></div>
        <div name="summary"></div>
        <div name="creator"></div>
        <div name="starring"></div>
      </div>
      <div className="d-flex flex-column" name="right-side">
        <div name="season-picker"> </div>
        list episodes
      </div>
    </div>
  );
};
