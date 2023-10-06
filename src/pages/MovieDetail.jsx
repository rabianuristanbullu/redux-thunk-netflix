import axios from "axios";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { options } from "../app/actions/movieActions";
import { baseImgUrl } from "../components/Hero";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`/movie/${movieId}`, options).then((res) => setMovie(res.data));
  }, []);
  if (!movie) return "Loading...";
  return (
    <div className="movie-detail bg-black row text-light p-5">
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <img
          className="img-fluid rounded shadow"
          src={`${baseImgUrl}${movie.poster_path}`}
          alt=""
        />
      </div>
      <div className="col-md-6">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <div className="row row-cols-2">
          <div>
            <p>Maliyet: {movie.budget} $</p>
            <p>Hasılat: {movie.revenue} $</p>
            <p>Kar: {movie.revenue - movie.budget} $</p>
          </div>
          <div>
            <div className="d-flex gap-3">
              Kategoriler:
              {movie.genres.map((genre) => (
                <p className="badge bg-danger">{genre.name}</p>
              ))}
            </div>
            <div className="d-flex gap-3">
              Diller:
              {movie.spoken_languages.map((lang) => (
                <p className="badge bg-primary">{lang.name}</p>
              ))}
            </div>
            <div className="d-flex flex-wrap gap-3">
              Yapımcı Şirketler:
              {movie.production_companies.map((comp) => (
                <p className="badge bg-secondary">{comp.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
