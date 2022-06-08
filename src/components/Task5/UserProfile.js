import React from "react";
import User from "../Task4/User";

const UserProfile = ({ user }) => {
  return (
    <div>
      <User item={user} />
    </div>
  );
};

export default UserProfile;
