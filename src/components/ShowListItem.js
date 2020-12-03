/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export const ShowListItem = ({ show: item }) => {
  const sizing = 0.75;
  const renderHtml = () => {
    return { __html: item.show.summary };
  };

  return (
    <div className="list-group" style={{ border: "none" }} key={item.show.id}>
      <a
        href="#"
        className="d-flex mb-3 list-group-item list-group-item-action p-4"
      >
        <div>
          <img
            alt={item.show.name}
            src={item.show.image.medium}
            style={{ borderRadius: 8 }}
            width={210 * sizing}
            height={295 * sizing}
          />
        </div>
        <div className="d-flex flex-column justify-content-center ml-3">
          <div
            className="display-4 mb-3 font-weight-bold"
            style={{ fontSize: 32 }}
          >
            {item.show.name}
          </div>
          <div dangerouslySetInnerHTML={renderHtml()} />
        </div>
      </a>
    </div>
  );
};
