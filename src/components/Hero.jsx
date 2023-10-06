import { useSelector } from "react-redux/es/hooks/useSelector";

export const baseImgUrl= "https://image.tmdb.org/t/p/original"

const Hero = () => {
  
  const state = useSelector((store) => store.movieReducer);
 

  const index = Math.round(Math.random() * state.popularMovies.length);
  const film = state.popularMovies[index];

  if(!film) return "Loading"
  return (
    <div className="row bg-dark text-light p-4">
      <div className="col-md-6 gap-3 mb-3 d-flex flex-column justify-content-center">
        <h1>{film.title}</h1>
        <p>{film.overview}</p>
        <p className="text-warning"> IMDB: {film.vote_average} </p>
        <div className="d-flex gap-3 justify-content-center">
          <button className="btn btn-danger">Oynat</button>
          <button className="btn btn-primary text-light">Listeye Ekle</button>
        </div>
      </div>
      <div className="col-md-6 d-flex align-items-center">
    <img src={`${baseImgUrl}${film.backdrop_path}`} className="img-fluid rounded shadow" />
      </div>
    </div>
  );
};

export default Hero;
