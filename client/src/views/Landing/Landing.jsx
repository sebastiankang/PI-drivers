import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Esta es la Landing</h1>
      <button>
        <Link to={"/home"}>Ingresar</Link>
      </button>
    </div>
  );
};

export default Landing;
