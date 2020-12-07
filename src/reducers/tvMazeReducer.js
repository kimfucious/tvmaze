const initialState = {
  searchOptions: [],
  selectedSeason: {},
  selectedShow: {},
  cast: [],
  crew: [],
  seasons: [],
  episodes: []
};
export const tvMaze = (state = { ...initialState }, action) => {
  switch (action.type) {
    case "GET_SHOW_CAST_SUCCESS":
      return { ...state, cast: action.payload };
    case "GET_SHOW_CREW_SUCCESS":
      return { ...state, crew: action.payload };
    case "GET_SEASON_EPISODES_SUCCESS":
      return { ...state, episodes: action.payload };
    case "GET_SHOW_SEASONS_SUCCESS":
      return { ...state, seasons: action.payload };
    case "RESET_SHOW_STATE":
      return { ...initialState };
    case "RESET_SHOW_STATE_SAVE_OPTIONS":
      return { ...initialState, searchOptions: [...state.searchOptions] };
    case "SET_SEARCH_OPTIONS":
      return { ...state, searchOptions: action.payload };
    case "SET_SELECTED_SEASON":
      return { ...state, selectedSeason: action.payload };
    case "SET_SELECTED_SHOW":
      return { ...state, selectedShow: action.payload };
    default:
      return state;
  }
};
