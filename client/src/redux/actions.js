import axios from "axios";

export const GET_DRIVERS = "GET_DRIVERS";
export const GET_DRIVER_BY_ID = "GET_DRIVERS_BY_ID";
export const GET_DRIVER_BY_NAME = "GET_DRIVERS_BY_NAME";
export const GET_TEAMS = "GET_TEAMS";
export const FILTER = "FILTER";

export const getDrivers = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/driver");
    const drivers = response.data;
    dispatch({ type: GET_DRIVERS, payload: drivers });
  };
};

export const getDriverById = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/driver/${id}`);
    const driverId = response.data[0]; //[0] porque la respuesta viene en un array
    dispatch({ type: GET_DRIVER_BY_ID, payload: driverId });
  };
};

export const getDriverByName = (name) => {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/driver?name=${name}`
    );
    const driverName = response.data; //[0] porque la respuesta viene en un array
    dispatch({ type: GET_DRIVER_BY_NAME, payload: driverName });
  };
};

export const getTeams = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/team");
    const teams = response.data;
    dispatch({ type: GET_TEAMS, payload: teams });
  };
};

export const filter = (allDrivers, team) => {
  return async function (dispatch) {
    let drivers = allDrivers.filter((driver) => driver.teams.includes(team));
    dispatch({ type: GET_DRIVERS, payload: drivers });
  };
};

// crear una action que le pegue al servidor a la ruta driver/:id y que esta action se dispare cuando se renderice el componente detail
