import React from "react";
import { ShowListItem } from "./ShowListItem";

export const ShowList = ({ options: shows }) => {
  const renderShows = () =>
    shows.map((item) => <ShowListItem show={item} key={item.show.id} />);

  return <div className="mt-3">{renderShows()}</div>;
};
