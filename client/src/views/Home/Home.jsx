import React from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDrivers, getTeams } from "../../redux/actions";
import SearchBar from "../../components/SearchBar/searchBar";
import Filters from "../../components/Filters/Filters";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDrivers());
    dispatch(getTeams());
  }, [dispatch]);
  //cuando se monta(useEffect), que haga el dispatch(useDispatch)
  return (
    <>
      <h1>Esta es la Home</h1>
      <SearchBar />
      <Filters />
      <CardsContainer />
    </>
  );
};

export default Home;
