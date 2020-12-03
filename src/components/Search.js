import React, { useState } from "react";
// import { AsyncTypeahead } from "react-bootstrap-typeahead";
import axios from "axios";
import qs from "qs";
import sortBy from "lodash.sortby";

export const Search = ({ options, setOptions }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // setIsLoading(true);
      const { data } = await axios.get(
        `http://api.tvmaze.com/search/shows?${qs.stringify({
          q: query
        })}`
      );
      console.warn(data);
      const shows = sortBy(
        data.filter((item) => item.show.image && item.show.image.medium),
        "show.name"
      );
      setOptions(shows);
      // setIsLoading(false);
    } catch (error) {
      // setIsLoading(false);
      console.warn(error);
    }
  };

  return (
    <form
      className="d-flex justify-content-center w-100"
      onSubmit={handleSubmit}
    >
      <div className="form-group w-100 mt-3" style={{ maxWidth: 600 }}>
        <div className="d-flex w-100">
          <input
            autoFocus
            className="form-control w-100"
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a TV show"
            value={query}
          />
          <button className="btn btn-primary ml-2" type="submit">
            Search
          </button>
        </div>
        {/* <AsyncTypeahead
        clearButton
        delay={300}
        filterBy={filterBy}
        id="tv-search-input"
        isLoading={isLoading}
        labelKey={(option) => `${option.show.name}`}
        onChange={handleChange}
        onSearch={handleSearch}
        open={false}
        options={options}
        placeholder="Search for a TV show..."
        renderMenuItemChildren={(option) => {
          console.warn(option);
          return (
            <>
              <img
                alt={option.show.name}
                src={option.show.image.medium}
                style={{
                  height: "24px",
                  marginRight: "10px",
                  width: "24px"
                }}
              />
              <span className="">{option.show.name}</span>
              <span className="">{` - (${option.show.premiered.slice(
                0,
                4
              )})`}</span>
            </>
          );
        }}
        // selected={selectedShow}
      /> */}
      </div>
    </form>
  );
};
