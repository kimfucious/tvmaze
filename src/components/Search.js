import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import PuffLoader from "react-spinners/PuffLoader";
import qs from "qs";
import sortBy from "lodash.sortby";

export const Search = ({ query, setQuery }) => {
  const dispatch = useDispatch();
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSpinning(true);
      const { data } = await axios.get(
        `https://api.tvmaze.com/search/shows?${qs.stringify({
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
    <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
      <div className="form-group w-100 mt-0 mt-sm-3" style={{ maxWidth: 800 }}>
        <div className="d-flex d-sm-none flex-wrap justify-content-center">
          <input
            autoFocus
            className="form-control form-control-sm"
            type="search"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a TV show"
            value={query}
          />
          <button
            className="d-flex align-items-center justify-content-center btn-block btn-sm btn-primary flex-shrink-0 mt-2"
            disabled={!query.length}
            style={{ height: 32 }}
            type="submit"
          >
            {isSpinning ? (
              <div className="">
                <PuffLoader size={18} color="#f8f9fa" />
              </div>
            ) : (
              <span>Search</span>
            )}
          </button>
        </div>
        <div className="d-none d-sm-flex">
          <input
            autoFocus
            className="form-control form-control-lg mr-3"
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a TV show"
            value={query}
          />
          <button
            className="d-flex align-items-center justify-content-center btn btn-lg btn-primary flex-shrink-0"
            disabled={!query.length}
            style={{ height: 48, width: 96 }}
            type="submit"
          >
            {isSpinning ? (
              <div className="">
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
