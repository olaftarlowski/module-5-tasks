import React, { useState } from "react";
import NavMenu from "./NavMenu";

const styles = {
  display: "flex",
  flexDirection: "column",
  alignSelf: "flex-start",
};

const Task3 = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const openNavHandler = () => {
    setIsNavOpen((e) => !e);
  };

  return (
    <div style={styles}>
      <button onClick={openNavHandler}>toggle nav</button>
      {isNavOpen && <NavMenu closeNav={openNavHandler} />}
    </div>
  );
};

export default Task3;
