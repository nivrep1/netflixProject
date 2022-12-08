import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import ReactPlayer from "react-player";

import { useSelector, useDispatch } from "react-redux";
import { hidePopup } from "../Store/Reducer/popupReducer";
import "../index.css";

const ContentPopup = () => {
  const showDialog = useSelector((state) => state.popupValue.showPopup);
  const contentValue = useSelector((state) => state.popupValue.content);

  const youtube = `https://www.youtube.com/watch?v=${contentValue.youtubeKey}`;

  console.log("[REDUX POPUP:]", contentValue);
  const dispatch = useDispatch();

  const closePopup = () => {
    dispatch(hidePopup());
  };

  return (
    <div>
      <Modal open={showDialog}>
        <Box className="modal">
          <div className="contend">
            <button
              className="close-modal"
              onClick={() => {
                closePopup();
              }}
            >
              <CloseIcon />
            </button>
            <ReactPlayer
              url={youtube}
              playing={true}
              // loop={true}
              // light=""
              width="100%"
              height="400px"
            />
            <h2 className="text-4xl mt-[12px]">{contentValue.title}</h2>
            <p className="text-xl  mt-[12px]">
              Release Date : {contentValue.release_date}
            </p>
            <p className="text-xl  mt-[12px]">{contentValue.age_restriction}</p>
            <p className="text-xl  mt-[12px]">{contentValue.description}</p>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ContentPopup;
