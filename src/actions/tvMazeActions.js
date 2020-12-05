import axios from "axios";

export const getShowDetails = (showId) => async (dispatch, getState) => {
  try {
    dispatch({ type: "GET_SHOW_DETAILS_START" });
    const {
      tvMaze: { selectedSeason }
    } = getState();
    await dispatch(getShowSeasons(showId));
    await dispatch(getShowCast(showId));
    await dispatch(getShowCrew(showId));
    await dispatch(getSeasonEpisodes(selectedSeason.id));
    dispatch({ type: "GET_SHOW_DETAILS_SUCCESS" });
    return Promise.resolve();
  } catch (error) {
    dispatch({ type: "GET_SHOW_DETAILS_FAIL" });
    console.warn(error);
    return Promise.reject(error);
  }
};

export const getShowCast = (showId) => async (dispatch) => {
  try {
    dispatch({ type: "GET_SHOW_CAST_START" });
    const { data } = await axios.get(
      `http://api.tvmaze.com/shows/${showId}/cast`
    );
    dispatch({ type: "GET_SHOW_CAST_SUCCESS", payload: data });
    return Promise.resolve(data);
  } catch (error) {
    console.warn(error);
    dispatch({ type: "GET_SHOW_CAST_FAIL", payload: error });
    return Promise.reject(error);
  }
};

export const getShowCrew = (showId) => async (dispatch) => {
  try {
    dispatch({ type: "GET_SHOW_CREW_START" });
    const { data } = await axios.get(
      `http://api.tvmaze.com/shows/${showId}/crew`
    );
    dispatch({ type: "GET_SHOW_CREW_SUCCESS", payload: data });
    return Promise.resolve(data);
  } catch (error) {
    console.warn(error);
    dispatch({ type: "GET_SHOW_CREW_FAIL", payload: error });
    return Promise.reject(error);
  }
};
export const getSeasonEpisodes = (seasonId) => async (dispatch) => {
  try {
    if (seasonId) {
      dispatch({ type: "GET_SEASON_EPISODES_START" });
      const { data } = await axios.get(
        `http://api.tvmaze.com/seasons/${seasonId}/episodes`
      );
      const episodes = data.filter((item) => item.number);
      dispatch({ type: "GET_SEASON_EPISODES_SUCCESS", payload: episodes });
      return Promise.resolve(episodes);
    }
  } catch (error) {
    console.warn(error);
    dispatch({ type: "GET_SEASON_EPISODES_FAIL", payload: error });
    return Promise.reject(error);
  }
};

export const getShowSeasons = (showId) => async (dispatch) => {
  try {
    dispatch({ type: "GET_SHOW_SEASONS_START" });
    const { data } = await axios.get(
      `http://api.tvmaze.com/shows/${showId}/seasons`
    );
    dispatch({ type: "GET_SHOW_SEASONS_SUCCESS", payload: data });
    return Promise.resolve(data);
  } catch (error) {
    console.warn(error);
    dispatch({ type: "GET_SHOW_SEASONS_FAIL", payload: error });
    return Promise.reject(error);
  }
};

// export const setSelectedShow = (show) => async (dispatch) => {
//   try {
//     dispatch({ type: "GET_SHOW_SEASONS_START" });
//     const { data } = await axios.get(
//       `http://api.tvmaze.com/shows/${showId}/seasons`
//     );
//     console.warn(data);
//     dispatch({ type: "GET_SHOW_SEASONS_SUCCESS", paylod: data });
//     return Promise.resolve(data);
//   } catch (error) {
//     console.warn(error);
//     dispatch({ type: "GET_SHOW_SEASONS_FAIL", payload: error });
//     return Promise.reject(error);
//   }
// };
