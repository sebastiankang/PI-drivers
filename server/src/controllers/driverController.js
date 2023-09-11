const axios = require("axios");
const { Driver, Team } = require("../db");
const mapDriver = require("../utils/utils");

const getDriversController = async () => {
  //get a la API
  const driversApi = await axios.get("http://localhost:5000/drivers");

  //traigo mapeado lo que viene de driversApi
  const driversApiMap = mapDriver(driversApi.data);

  //get a la db
  const driversDb = await Driver.findAll({
    // sirve para traer los teams de cada driver
    include: {
      model: Team,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  const drivers = [...driversDb, ...driversApiMap];

  return drivers;
};

const postDriversController = async (
  name,
  surname,
  description,
  image,
  nationality,
  dob,
  teams
) => {
  let nameMinuscula = name;
  nameMinuscula = nameMinuscula.toLowerCase(); //para que la busqueda no sea sensible
  nameMinuscula =
    nameMinuscula[0].toUpperCase() +
    nameMinuscula.slice(1, nameMinuscula.length); //a mayúsculas y minúsculas
  const newDriver = await Driver.create({
    name: nameMinuscula,
    surname: surname,
    description: description,
    image: image,
    nationality: nationality,
    dob: dob,
  });
  newDriver.addTeam(teams);
  return newDriver;
};

const getDriversByIdController = async (id) => {
  //creamos la variable donde se va guardar el corredor
  let driver;

  //comparacion de id y ver donde hacer la peticion
  if (isNaN(id)) {
    //get a la base de datos
    const driverDb = await Driver.findAll({
      where: {
        id: id,
      },
      include: {
        model: Team,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    driver = driverDb;
  } else {
    //get a la API
    const driverApi = await axios.get(`http://localhost:5000/drivers/${id}`);
    const cleanDriver = mapDriver([driverApi.data]); //lo envio como array para que lo trabaje el mapDriver, por eso los[]
    driver = cleanDriver;
  }
  return driver;
};

const getDriversByNameController = async (name) => {
  name = name.toLowerCase(); //para que la busqueda no sea sensible
  name = name[0].toUpperCase() + name.slice(1, name.length); //a mayúsculas y minúsculas

  console.log(name);
  const drivers = await axios.get(
    `http://localhost:5000/drivers?name.forename=${name}`
  );
  const driversApiMap = mapDriver(drivers.data);

  if (driversApiMap.length > 16) {
    //cambio a 2 por ej
    let firstDrivers = driversApiMap.slice(0, 15);
    return firstDrivers;
  } else {
    console.log(driversApiMap.length);
    const restantes = 15 - driversApiMap.length;
    console.log(restantes);

    const driverDataBase = await Driver.findAll({
      where: { name: name },
      limit: restantes,
      include: {
        model: Team,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    console.log(driverDataBase);

    // const total = drivers.data + driverDataBase

    return [...driversApiMap, ...driverDataBase];
  }
};

module.exports = {
  getDriversController,
  postDriversController,
  getDriversByIdController,
  getDriversByNameController,
};
