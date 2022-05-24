import MoviePageV2 from "./pages/MoviePageV2";
import { Fragment,lazy,Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/scss"
import Banner from "./components/banner/Banner";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import MovieCart from "./components/movie/MovieCart";
import MovieList from "./components/movie/MovieList";
const HomePage = lazy(()=>import("./pages/HomePage"))
const MovieDetail = lazy(()=>import("./pages/MovieDetail"))
const MoviePage = lazy(()=>import("./pages/MoviePage"))
function App() {
  return (
    <Fragment>
    <Suspense>
    <Routes>
      <Route element={<Main></Main>}>
          <Route path="/" element={<><Banner></Banner><HomePage></HomePage></>}></Route>
          <Route path="/movies" element={<MoviePageV2></MoviePageV2>}></Route>
          <Route path="/movie/:movieId" element={<MovieDetail></MovieDetail>}></Route>
      </Route>
   </Routes>
    </Suspense>
   

    </Fragment>
  )
}

export default App;
