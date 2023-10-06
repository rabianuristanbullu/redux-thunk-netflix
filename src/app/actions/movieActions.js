 import axios from "axios";
// asenkron aksiyon tanımlama:

//Api'ye isteği yapanı belirtir.
export const options = {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGM1ODNmYzNkYjgxOGUyMDBkYWE1M2UyYzE1NjM2NSIsInN1YiI6IjY1MWVmNmE0YzUwYWQyMDBjOTFlMzk1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-Fjx0y0yPGllWX1w5FtiI3KeqjKd119a2mllFCJPmow'
  }
};

axios.defaults.baseURL = ' https://api.themoviedb.org/3';

export const getPopularMovies = () => (dispatch) => {
  axios
    .get('/movie/popular', options)
    .then((res) => {
      dispatch({
        type: "SET_POPULAR_MOVIES",
        payload: res.data.results,
      });
    });
};

export const getCategory = () => (dispatch) => {
  axios.get('/genre/movie/list', options)
  .then((res)=>
  dispatch({
    type: "SET_CATEGORY_MOVIES",
    payload: res.data.genres,
  })
  )
};
