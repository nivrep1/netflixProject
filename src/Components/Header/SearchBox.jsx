import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "../../styles/Header/search.scss";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchValue } from "../../Store/Reducer/searchReducer";
import {Link} from "react-router-dom"
import axios from "axios";
import requests from "../../Requests";
import { UserAuth } from "../../context/AuthContext";

const Search = () => {
  const {user,logOut} = UserAuth()
  console.log(user);

  const navigate = useNavigate();
  const searchValue = useSelector((state) => state.searchValue.value);
  const dispatch = useDispatch();

  console.log("===> ", searchValue);

  const searchMulti = (value) => {
    axios
      .get(requests.requestSearch, {
        params: {
          query: value,
          include_adult: false,
        },
      })
      .then((response) => {
        const data = {
          title: value,
          movies: response.data.results.filter(
            (item) => item.backdrop_path != null
          ),
        };
        dispatch(changeSearchValue(data));
      });
  };



  const handleLogOut = async ()=>{
    try{
      await logOut()
      navigate("/login")
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <div>
{user?.email ? <div className="right">
      <input
        type="search"
        placeholder="Search..."
        onChange={(e) => {
          const value = String(e.target.value);

          navigate(value.length > 0 ? "/search" : "/");

          if (value.length > 1) {
            searchMulti(value);
          }
        
        }}
      />

      <button>
        <SearchIcon className="icon" />
      </button>
      <NotificationsActiveIcon className="icon" />
      <div className="profile">
        <ArrowDropDownIcon className="icon" />
        <div className="options ">
          <span>Settings</span>
          {/* <Link to="/login"> */}
          <span>Account</span>
          {/* </Link> */}
          

       
         <span onClick={handleLogOut}>Log Out</span>
      
        
        
          
        </div>
      </div>
    </div> : null}
    </div>
    
  );
};

export default Search;

//text-white sm hidden h-6 w-6 sm:inline
