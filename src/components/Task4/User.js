import React from "react";

const User = ({ item, userClick }) => {
  const { id, firstName, age } = item;

  return (
    <li onClick={() => userClick(item)}>
      Nr: {id} || Name: {firstName} || Age: {age}
    </li>
  );
};

export default User;
