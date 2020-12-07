/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useDispatch } from "react-redux";
import { getSecureUrl } from "../helpers";
import { useWindowSize } from "../hooks/useWindowSize";

export const ShowListItem = ({ show: item }) => {
  const dispatch = useDispatch();

  const [, width] = useWindowSize();

  const isSmall = width < 576;

  const sizing = isSmall ? 0.5 : 0.75;

  const renderHtml = () => {
    return { __html: item.show.summary };
  };

  const handleSelectShow = async () => {
    try {
      dispatch({ type: "SET_SELECTED_SHOW", payload: item });
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div className="mb-3" key={item.show.id}>
      <a
        href="#"
        className="d-flex pb-1 pb-sm-3 list-group-item list-group-item-action"
        onClick={() => handleSelectShow()}
      >
        <div className="d-flex row align-items-center">
          <div
            className={`d-flex col-sm-4 col-xl-3 mb-2 mb-sm-0 pt-1 pt-sm-0 py-sm-3 ${
              !isSmall ? "justify-content-center" : ""
            }`}
          >
            <img
              alt={item.show.name}
              src={getSecureUrl(item.show.image.medium)}
              style={{ borderRadius: 8 }}
              width={210 * sizing}
              height={295 * sizing}
            />
          </div>
          <div className="d-flex col-sm-8 col-xl-9">
            <div className="d-flex flex-column justify-content-center">
              <div
                className="display-4 mb-2 mb-sm-3 font-weight-bold"
                style={{ fontSize: isSmall ? 24 : 32 }}
              >
                {item.show.name}
              </div>
              <div
                dangerouslySetInnerHTML={renderHtml()}
                style={{
                  textAlign: isSmall ? "justify" : "",
                  textJustify: isSmall ? "inter-word" : "",
                  fontSize: isSmall ? 14 : ""
                }}
              />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
