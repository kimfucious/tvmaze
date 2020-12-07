import React, { useState } from "react";
import { NavBar } from "./components/NavBar";
import { Search } from "./components/Search";
import { ShowDetail } from "./components/ShowDetail";
import { ShowList } from "./components/ShowList";
import { useSelector } from "react-redux";

export const App = () => {
  const {
    tvMaze: { searchOptions, selectedShow }
  } = useSelector((state) => state);

  const [query, setQuery] = useState("");

  return (
    <>
      <NavBar setQuery={setQuery} />
      <div className="container d-flex flex-column align-items-center animate__animated animate_fadeIn pb-3 pb-sm-5">
        <div className="mt-3 mt-sm-5"></div>
        <div className="w-100">
          {selectedShow.show ? (
            <ShowDetail selectedShow={selectedShow} setQuery={setQuery} />
          ) : (
            <>
              <Search query={query} setQuery={setQuery} />
              {searchOptions.length ? <ShowList shows={searchOptions} /> : null}
            </>
          )}
        </div>
      </div>
    </>
  );
};
