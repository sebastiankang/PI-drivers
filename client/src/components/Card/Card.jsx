import style from "./Card.module.css";
import { useNavigate } from "react-router-dom";

const Card = (d) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail/${d.id}`);
  };

  return (
    <div className={style.card} onClick={handleClick}>
      <p>Name:{d.name}</p>
      <p>Surname:{d.surname}</p>
      <img src={d.image} alt={`${d.name} ${d.surname}`} />
      <ul>
        Teams:
        {d.teams?.map((t, index) => {
          return <li key={index}>{t.name}</li>;
        })}
      </ul>
    </div>
  );
};
export default Card;
