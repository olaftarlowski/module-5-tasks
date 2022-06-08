import React, { useState } from "react";
import Snackbar from "./Snackbar";
import "./styles.css";

const Task2 = () => {
  const [isSnackbarActive, setIsSnackbarActive] = useState(false);

  const snackbarHandler = () => {
    setIsSnackbarActive(true);
  };

  return (
    <div>
      <button onClick={snackbarHandler}>open snackbar</button>
      {isSnackbarActive && (
        <Snackbar
          setSnackbar={setIsSnackbarActive}
          toFadeOut="1000"
          position="top-right"
        />
      )}
    </div>
  );
};

export default Task2;
