/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import MoonLoader from "react-spinners/MoonLoader";
import { useWindowSize } from "../hooks/useWindowSize";

export const SeasonDropDown = ({ seasons, selectedSeason }) => {
  const dispatch = useDispatch();
  const [, width] = useWindowSize();
  const isSmall = width < 576;
  const [isSpinning, setIsSpinning] = useState(false);
  const handleSelectSeason = async (seasonNumber) => {
    try {
      // I know this doesn't work
      setIsSpinning(true);
      const season = seasons.filter((item) => item.number === seasonNumber)[0];
      dispatch({ type: "SET_SELECTED_SEASON", payload: season });
      setIsSpinning(false);
    } catch (error) {
      console.warn(error);
      setIsSpinning(false);
    }
  };

  const renderSeasons = () =>
    seasons.map((item) => {
      return (
        <a
          className="dropdown-item"
          href="#"
          key={item.id}
          onClick={() => handleSelectSeason(item.number)}
        >{`Season ${item.number}`}</a>
      );
    });
  return (
    <div className="d-flex align-items-center mt-3 mt-sm-0">
      <div className="btn-group">
        <button
          className={`btn btn-secondary btn-${
            isSmall ? "" : "lg"
          } dropdown-toggle`}
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="mr-3">{`Season ${
            selectedSeason.number ? selectedSeason.number : "1"
          }`}</span>
        </button>
        <div className="dropdown-menu">{renderSeasons()}</div>
      </div>
      {isSpinning ? (
        <div className="w-100 ml-3">
          <MoonLoader size={28} color="black" loading={isSpinning} />
        </div>
      ) : null}
    </div>
  );
};
