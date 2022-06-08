import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Task3 from "../Task3/Task3";
import UserContainer from "../Task4/UserContainer";
import Home from "./Home";
import Home2 from "./Home2";
import UserProfile from "./UserProfile";

const RouterPage = () => {
  const [clickedUser, setClickedUser] = useState({});

  const newUserHandler = (item) => {
    setClickedUser(item);
  };

  return (
    <div style={{ textAlign: "left" }}>
      <Task3 />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home2 />} />
        </Route>
        <Route
          path="users"
          element={<UserContainer userClick={newUserHandler} />}
        />
        <Route
          path="user-profile"
          element={<UserProfile user={clickedUser} />}
        />
      </Routes>
    </div>
  );
};

export default RouterPage;
