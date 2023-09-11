import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDriverByName } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleClick = () => {
    dispatch(getDriverByName(search));
  };

  console.log(search);
  return (
    <div>
      <input type="text" onChange={handleSearch}></input>
      <button onClick={handleClick}> SEARCH </button>
    </div>
  );
};

export default SearchBar;
