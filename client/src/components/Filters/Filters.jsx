import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../redux/actions";

const Filters = () => {
  let allTeams = useSelector((state) => state.teams);
  let allDrivers = useSelector((state) => state.drivers);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    //esta funcion tiene que disparar la action FILTER enviandole por parametro el arreglo de todos los drivers y el value de la option seleccionada(event.target.value)
    const selectedTeam = event.target.value;
    dispatch(filter(allDrivers, selectedTeam));
  };
  return (
    <div>
      <select name="team" onClick={handleClick}>
        {allTeams.map((team) => (
          <option value={team.name}>{team.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
