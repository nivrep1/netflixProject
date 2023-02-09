import { Drawer, Box, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "../DrawerMenu/Drawer.scss";
const BurgerMenu = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div className="burger">
      <IconButton onClick={() => setOpenDrawer(true)}>
        <MenuIcon className="text-white" />
      </IconButton>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box
          className="box"
          // sx={{
          //   backgroundColor: "#eab121",
          // }}
        >
          <div className="nav">
            <ul className="flex-col ">
              <li className="headerLink ">
                <Link to="/">Home</Link>
              </li>
              <li className="headerLink">
                <Link to="/movies">Movies</Link>
              </li>
              <li className="headerLink">
                <Link to="/tvShows">Tv Shows</Link>
              </li>
              <li className="headerLink">
                <Link to="/newPopular">New & Popular</Link>
              </li>
              <li className="headerLink">
                <Link to="/myList">My List</Link>
              </li>
            </ul>
          </div>
        </Box>
      </Drawer>
    </div>
  );
};

export default BurgerMenu;
