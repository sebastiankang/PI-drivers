import {
  GET_DRIVERS,
  GET_DRIVER_BY_ID,
  GET_DRIVER_BY_NAME,
  GET_TEAMS,
} from "./actions";

const initialState = {
  drivers: [],
  driverId: {},
  teams: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRIVERS:
      return { ...state, drivers: action.payload };
    case GET_DRIVER_BY_ID:
      return { ...state, driverId: action.payload };
    case GET_DRIVER_BY_NAME:
      return { ...state, drivers: action.payload };
    case GET_TEAMS:
      return { ...state, teams: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
