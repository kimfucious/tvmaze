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
      <div className="container d-flex flex-column align-items-center pb-5 animate__animated animate_fadeIn pb-5">
        <div className="mt-5"></div>
        <div className="w-100">
          {selectedShow.show ? (
            <ShowDetail selectedShow={selectedShow} />
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
