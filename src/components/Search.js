import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import PuffLoader from "react-spinners/PuffLoader";
import qs from "qs";
import sortBy from "lodash.sortby";

export const Search = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSpinning(true);
      const { data } = await axios.get(
        `http://api.tvmaze.com/search/shows?${qs.stringify({
          q: query
        })}`
      );
      const shows = sortBy(
        data.filter((item) => item.show.image && item.show.image.medium),
        "show.name"
      );
      dispatch({ type: "SET_SEARCH_OPTIONS", payload: shows });
      setIsSpinning(false);
    } catch (error) {
      setIsSpinning(false);
      console.warn(error);
    }
  };

  return (
    <form
      className="d-flex justify-content-center w-100"
      onSubmit={handleSubmit}
    >
      <div className="form-group w-100 mt-3" style={{ maxWidth: 800 }}>
        <div className="d-flex w-100">
          <input
            autoFocus
            className="form-control form-control-lg w-100 mr-3"
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a TV show"
            value={query}
          />
          <button
            className="d-flex align-items-center justify-content-center btn btn-lg btn-primary"
            disabled={!query.length}
            style={{ height: 48, width: 96 }}
            type="submit"
          >
            {isSpinning ? (
              <div className="d-flex align-items-center justify-content-center w-100">
                <PuffLoader size={32} color="#f8f9fa" />
              </div>
            ) : (
              <span>Search</span>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};
