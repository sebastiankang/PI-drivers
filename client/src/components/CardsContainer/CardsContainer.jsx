import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import Paginado from "../Paginado/Paginado";

const CardsContainer = (props) => {
  let allDrivers = useSelector((state) => state.drivers);

  //logica del paginado?
  const [currentPage, setCurrentPage] = useState(1);
  const [driversPerPage, setDriversPerPage] = useState(9);
  const indexOfLastDriver = currentPage * driversPerPage;
  const indexOfFirstDriver = indexOfLastDriver - driversPerPage;
  const drivers = allDrivers.slice(indexOfFirstDriver, indexOfLastDriver);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    paginado(1);
  }, [allDrivers]);

  return (
    <div>
      <div>
        <h1>CARD CONTAINER</h1>
        <div>
          {drivers?.map((c) => {
            return (
              <Card
                key={c.id}
                name={c.name}
                surname={c.surname}
                image={c.image}
                nationality={c.nationality}
                description={c.description}
                dob={c.dob}
                teams={c.teams}
                id={c.id}
              />
            );
          })}
        </div>
        <Paginado
          driversPerPage={driversPerPage}
          allDrivers={allDrivers?.length}
          paginado={paginado}
        />
      </div>
    </div>
  );
};

export default CardsContainer;
