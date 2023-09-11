import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    nationality: "",
    image: "",
    dob: "",
    description: "",
    teams: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    nationality: "",
    image: "",
    dob: "",
    description: "",
    teams: "",
  });
  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
    setErrors(validate());
  };

  const validate = () => {
    const error = {};
    if (
      !/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
        form.dob
      )
    ) {
      error.dob = "No es una fecha valida";
    }
    if (!form.name) {
      errors.name = "El nombre es obligatorio.";
    }
    if (!form.surname) {
      errors.surname = "El apellido es obligatorio.";
    }
    return error;
  };

  const handleClick = () => {
    dispatch(createDriver); // crear action
  };

  console.log(form.name);
  return (
    <form onSubmit={handleClick}>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        value={form.name}
        onChange={changeHandler}
        name="name"
      />
      {errors.name && <span>{errors.name}</span>}

      <hr></hr>

      <label htmlFor="surname">Surname: </label>
      <input
        type="text"
        value={form.surname}
        onChange={changeHandler}
        name="surname"
      />
      {errors.surname && <span>{errors.surname}</span>}

      <hr></hr>

      <label htmlFor="nationality">Nationality: </label>
      <input
        type="text"
        value={form.nationality}
        onChange={changeHandler}
        name="nationality"
      />

      <hr></hr>

      <label htmlFor="image">Image: </label>
      <input
        type="text"
        value={form.image}
        onChange={changeHandler}
        name="image"
      />

      <hr></hr>

      <label htmlFor="birthdate">Birthdate: </label>
      <input
        type="text"
        value={form.birthdate}
        onChange={changeHandler}
        name="birthdate"
      />
      {errors.birthdate && <span>{errors.birthdate}</span>}

      <hr></hr>

      <label htmlFor="description">Description: </label>
      <input
        type="text"
        value={form.description}
        onChange={changeHandler}
        name="description"
      />

      <hr></hr>

      <label htmlFor="teams">Teams: </label>
      <input
        type="text"
        value={form.teams}
        onChange={changeHandler}
        name="teams"
      />

      <hr></hr>

      <button>CREATE DRIVER</button>
    </form>
  );
};

export default Form;
