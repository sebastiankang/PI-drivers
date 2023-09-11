const {
  getDriversController,
  postDriversController,
  getDriversByIdController,
  getDriversByNameController,
} = require("../controllers/driverController");

const getDrivers = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      //si tengo name
      const driverName = await getDriversByNameController(name);
      res.status(200).send(driverName);
    } else {
      //si no tengo name
      const drivers = await getDriversController();
      res.status(200).send(drivers);
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const postDriver = async (req, res) => {
  const { name, surname, description, image, nationality, dob, teams } =
    req.body;
  try {
    const newDriver = await postDriversController(
      name,
      surname,
      description,
      image,
      nationality,
      dob,
      teams
    );
    res.status(200).send(newDriver);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const getDriversById = async (req, res) => {
  const { id } = req.params;
  try {
    const driverId = await getDriversByIdController(id);
    res.status(200).send(driverId);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

module.exports = { getDrivers, postDriver, getDriversById };
