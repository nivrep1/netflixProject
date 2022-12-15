import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import "../../styles/FirstPage/buttonEmail.scss"

const ButtonEmail = () => {
  return (
    <div className="button-email">
    <p className="text">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
      <TextField
        style={{ width: "55%"}}
        required
        InputLabelProps={{ style: { color: "#8c8c8c" } }}
        sx={{ border: "none", backgroundColor: "#fff" }}
        id="filled-basic"
        label="Email"
        variant="filled"
        color="warning"
        className="textField"
      />
      <Link to="/signup">
      <button className="get-started"><a href="#">Get Started</a></button>
      </Link>
    </div>
  );
};

export default ButtonEmail;
