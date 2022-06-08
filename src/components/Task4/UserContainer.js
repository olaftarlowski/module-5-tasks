import React, { useEffect, useState } from "react";
import UserList from "./UserList";

const UserContainer = ({ userClick }) => {
  const [userData, setUserData] = useState([]);
  const [queryValue, setQueryValue] = useState("");

  const getData = async () => {
    await fetch("../../../users.json")
      .then((res) => res.json())
      .then((data) => setUserData(data.users));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setQueryValue(event.target.value);
    }
  };

  const filteredData = userData.filter((user) => {
    if (queryValue) {
      return user.firstName.toLowerCase().includes(queryValue.toLowerCase());
    }
    return user;
  });

  const resetQueryValueHandler = () => {
    setQueryValue("");
  };

  return (
    <div>
      <input type="text" onKeyDown={handleKeyDown} />
      <button onClick={resetQueryValueHandler}>RESET SEARCH</button>
      <UserList users={filteredData} userClick={userClick} />
    </div>
  );
};

export default UserContainer;
