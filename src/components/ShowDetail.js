import React, { useEffect } from "react";
import { EpisodeList } from "../components/EpisodeList";
import { getSeasonEpisodes, getShowDetails } from "../actions/tvMazeActions";
import { SeasonDropDown } from "./SeasonDropDown";
import { useDispatch, useSelector } from "react-redux";
import { getSecureUrl } from "../helpers";

export const ShowDetail = ({ selectedShow: item, setQuery }) => {
  const dispatch = useDispatch();
  const sizing = 1;

  const renderHtml = () => {
    return { __html: item.show.summary };
  };

  const {
    tvMaze: { cast, crew, episodes, seasons, selectedSeason, selectedShow }
  } = useSelector((state) => state);

  useEffect(() => {
    if (item.show.id) {
      dispatch(getShowDetails(item.show.id));
    }
  }, [dispatch, item]);

  useEffect(() => {
    if (seasons.length) {
      const season = seasons.filter((item) => item.number === 1)[0];
      dispatch({ type: "SET_SELECTED_SEASON", payload: season });
    }
  }, [dispatch, seasons]);

  useEffect(() => {
    if (selectedSeason && selectedSeason.id) {
      dispatch(getSeasonEpisodes(selectedSeason.id));
    }
  }, [dispatch, selectedSeason]);

  const getCast = () => {
    try {
      const starring = cast.slice(0, 4).map((item) => item.person.name);
      return starring.join(", ");
    } catch (error) {
      console.warn(error);
    }
  };

  const getCreators = () => {
    try {
      const creators = crew
        .filter((item) => item.type === "Creator")
        .map((item) => item.person.name);
      return creators.join(", ");
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="container row mt-4">
        <div
          className="d-flex flex-column col-5 mr-3"
          name="left-side"
          style={{ maxWidth: 350 }}
        >
          <div name="image">
            <img
              className="animate__animated animate__fadeIn"
              alt={item.show.name}
              src={getSecureUrl(item.show.image.medium)}
              style={{ borderRadius: 8 }}
              width={336 * sizing}
              height={472 * sizing}
            />
          </div>
          <div
            className="font-weight-bold mt-3"
            name="title"
            style={{ fontSize: 24 }}
          >
            {item.show.name}
          </div>
          <div
            className="mt-2 mb-0 text-muted"
            name="summary"
            dangerouslySetInnerHTML={renderHtml()}
            style={{
              textAlign: "justify",
              textJustify: "inter-word",
              fontSize: 14
            }}
          />
          <div className="mt-2" name="creator" style={{ fontSize: 14 }}>
            <strong>Creator(s): </strong>
            <span className="text-muted">{getCreators()}</span>
          </div>
          <div className="mt-2" name="starring" style={{ fontSize: 14 }}>
            <strong>Starring: </strong>{" "}
            <span className="text-muted">{getCast()}</span>
          </div>
        </div>
        <div className="d-flex flex-column col-7" name="right-side">
          <SeasonDropDown seasons={seasons} selectedSeason={selectedSeason} />
          <EpisodeList
            episodes={episodes}
            rating={selectedShow.show.rating.average}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center w-100">
        <button
          className="btn btn-text text-muted mt-5"
          onClick={() => {
            setQuery("");
            dispatch({ type: "RESET_SHOW_STATE" });
          }}
        >
          back
        </button>
      </div>
    </div>
  );
};
