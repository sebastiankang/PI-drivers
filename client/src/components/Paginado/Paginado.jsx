import styles from "./paginado.module.css";

const Paginado = ({ driversPerPage, allDrivers, paginado }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allDrivers / driversPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav className={styles.paginado}>
        <ul>
          {pageNumbers &&
            pageNumbers.map((number, index) => (
              <p key={index}>
                <a onClick={() => paginado(number)}>{number}</a>
              </p>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default Paginado;
