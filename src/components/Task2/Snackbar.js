import React, { useEffect } from "react";
import styled from "styled-components";

const SnackbarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 10;
  transition: opacity 150ms, transform 150ms;

  span {
    background-color: #fff;
    color: #000;
    padding: 24px;
  }
`;

const Snackbar = ({ setSnackbar, toFadeOut, position }) => {
  console.log("rerender");

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("rerender2");
      setSnackbar(false);
    }, toFadeOut);

    return () => clearTimeout(timer);
  }, [setSnackbar, toFadeOut]);

  return (
    <SnackbarWrapper className={`snackbar-wrapper-${position}`}>
      <span>Snackbar</span>
    </SnackbarWrapper>
  );
};

export default Snackbar;
