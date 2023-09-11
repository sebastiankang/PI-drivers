import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDriverById } from "../../redux/actions";

const Detail = () => {
  const dispatch = useDispatch(); //hook para ejecutar las actions
  const { id } = useParams();

  useEffect(() => {
    //cuando se renderiza el componente hago tal cosa
    dispatch(getDriverById(id));
  }, [id]);
  const driverId = useSelector((state) => state.driverId); //lo uso para ver el estado global

  return (
    driverId && (
      <>
        <h1>{driverId.id}</h1>
        <h1>{driverId.name}</h1>
        <h1>{driverId.surname}</h1>
        <h1>{driverId.image}</h1>
        <h1>{driverId.nationality}</h1>
        <h1>{driverId.image}</h1>
        <h1>{driverId.description}</h1>
      </>
    )
  );
};

export default Detail;
