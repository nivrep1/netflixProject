import { Route, Routes } from "react-router-dom";

//Pages Routing
import Home from "./Pages/Home";
import TvShows from "./Pages/tvShows";
import Movies from "./Pages/Movies";
import NewPopular from "./Pages/NewPopular";
import MyList from "./Pages/MyList";
import SearchMovie from "./Pages/SearchMovie";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Account from "./Pages/Account";
import ProtectorRoute from "./Components/ProtectorRoute";
import Head from "./Components/Header/Head";

function App() {
  return (
    <>
      <div className="relative h-screen  lg:h-[140vh]">
        <Head />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectorRoute>
                <Home />
              </ProtectorRoute>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectorRoute>
                <Movies />
              </ProtectorRoute>
            }
          />
          <Route
            path="/tvShows"
            element={
              <ProtectorRoute>
                <TvShows />
              </ProtectorRoute>
            }
          />
          <Route
            path="/newPopular"
            element={
              <ProtectorRoute>
                <NewPopular />
              </ProtectorRoute>
            }
          />
          <Route
            path="/myList"
            element={
              <ProtectorRoute>
                <MyList />
              </ProtectorRoute>
            }
          />
          <Route
            path="/search"
            element={
              <ProtectorRoute>
                <SearchMovie />
              </ProtectorRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <ProtectorRoute>
                <Account />
              </ProtectorRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
