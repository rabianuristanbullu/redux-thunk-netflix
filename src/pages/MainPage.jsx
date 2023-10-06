import React, { useEffect } from "react";
import { getCategory, getPopularMovies } from "../app/actions/movieActions";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero";
import ListMovies from "../components/ListMovies";

const MainPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.movieReducer);
  console.log(state);
  useEffect(() => {
    //popüler filmleri çekme işlemi
    dispatch(getPopularMovies());

    //kategori verilerini çekme işlkemi
    dispatch(getCategory());
  }, []);
  return (
    <div>
      <Hero />
      {state?.genres.slice(0,10).map((genre) => (
        <ListMovies
          title={genre.name}
          fetchUrl={`/discover/movie?with_genres=${genre.id}`}
        />
      ))}
    </div>
  );
};

export default MainPage;
