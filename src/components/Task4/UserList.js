import React from "react";
import User from "./User";

const UserList = ({ users, userClick }) => {
  return (
    <ul>
      {users.map((item) => {
        return <User key={item.id} item={item} userClick={userClick} />;
      })}
    </ul>
  );
};

export default UserList;
