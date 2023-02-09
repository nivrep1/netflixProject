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
import Header from "./Components/Header";
import FirstPage from "./Pages/FirstPage";

function App() {
  return (
    <>
      <div className="relative h-screen  lg:h-[140vh]">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectorRoute>
                <Header />
                <Home />
              </ProtectorRoute>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectorRoute>
                <Header />
                <Movies />
              </ProtectorRoute>
            }
          />
          <Route
            path="/tvShows"
            element={
              <ProtectorRoute>
                <Header />
                <TvShows />
              </ProtectorRoute>
            }
          />
          <Route
            path="/newPopular"
            element={
              <ProtectorRoute>
                <Header />
                <NewPopular />
              </ProtectorRoute>
            }
          />
          <Route
            path="/myList"
            element={
              <ProtectorRoute>
                <Header />
                <MyList />
              </ProtectorRoute>
            }
          />
          <Route
            path="/search"
            element={
              <ProtectorRoute>
                <Header />
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
          <Route path="/firstPage" element={<FirstPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
