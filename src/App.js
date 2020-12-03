import React, { useState } from "react";
import { Search } from "./components/Search";
import { ShowList } from "./components/ShowList";

export const App = () => {
  const [options, setOptions] = useState([]);

  return (
    <div className="container d-flex flex-column align-items-center pb-5">
      <div className="mt-5">
        <span role="img" aria-label="tv" style={{ fontSize: 72 }}>
          📺
        </span>
      </div>
      <h1 className="display-3 text-muted mt-2">TV Show Search</h1>
      <div className="w-100">
        <Search options={options} setOptions={setOptions} />
        <ShowList options={options} />
      </div>
    </div>
  );
};
