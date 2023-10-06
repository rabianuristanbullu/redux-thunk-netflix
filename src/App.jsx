import "./App.css"
import { BrowserRouter, Routes,Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import MovieDetail from "./pages/MovieDetail"
import Header from "./components/Header"


function App() {


  return (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/"  element={<MainPage/>}/>
    <Route path="/detail/:movieId"  element={<MovieDetail/>} />
  </Routes>
  </BrowserRouter>
  )
}

export default App
