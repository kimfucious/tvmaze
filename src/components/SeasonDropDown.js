/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import MoonLoader from "react-spinners/MoonLoader";

export const SeasonDropDown = ({ seasons, selectedSeason }) => {
  const dispatch = useDispatch();
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
    <div className="d-flex align-items-center">
      <div className="btn-group" style={{ width: 150 }}>
        <button
          className="btn btn-secondary btn-lg dropdown-toggle"
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
