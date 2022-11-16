import { Route, Routes } from "react-router-dom";
import Head from "./Components/Header/Head";

//Pages Routing
import Home from "./Pages/Home";
import TvShows from "./Pages/tvShows";
import Movies from "./Pages/Movies";
import NewPopular from "./Pages/NewPopular";
import MyList from "./Pages/MyList";
function App() {
  return (
    <>
      <div className="relative h-screen  lg:h-[140vh]">
        <Head />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvShows" element={<TvShows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/newPopular" element={<NewPopular />} />
          <Route path="/myList" element={<MyList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
