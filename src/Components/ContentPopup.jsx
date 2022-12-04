import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

import { useSelector, useDispatch } from "react-redux";
import { hidePopup } from "../Store/Reducer/popupReducer";

const ContentPopup = () => {
  const showDialog = useSelector((state) => state.popupValue.showPopup);
  const contentValue = useSelector((state) => state.popupValue.content);

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
            {contentValue.title}
            {contentValue.description}
            {contentValue.youtubeKey}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ContentPopup;
