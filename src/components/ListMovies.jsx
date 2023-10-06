import axios from "axios";
import React, { useEffect, useState } from "react";
import { options } from "../app/actions/movieActions";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { baseImgUrl } from "./Hero";
import { Link } from "react-router-dom";

const ListMovies = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    axios.get(fetchUrl, options).then((res) => setMovies(res.data.results));
  }, []);
  if (!movies) return "Loading";
  return (
    <div className="bg-dark text-light p-4">
      <h4>{title}</h4>
      <Splide
        options={{
          gap: "10px",
          autoWidth: true,
          pagination: false,
        }}
      >
        {movies.map((movie) => (
          <SplideSlide>
            <Link to={`/detail/${movie.id}`}>
              <img className="film" src={`${baseImgUrl}${movie.poster_path}`} />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ListMovies;
