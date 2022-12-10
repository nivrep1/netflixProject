import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const ButtonEmail = () => {
  return (
    <div>
      <TextField
        style={{ width: "68%" }}
        required
        InputLabelProps={{ style: { color: "#8c8c8c" } }}
        sx={{ border: "none", backgroundColor: "#fff" }}
        id="filled-basic"
        label="Email"
        variant="filled"
        color="warning"
        className="textField"
      />
      <button className="get-started"><a href="#">Get Started</a>  </button>
    </div>
  );
};

export default ButtonEmail;
