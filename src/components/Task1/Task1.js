import React, { useState } from "react";
import Dialog from "./Dialog";

const Task1 = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const dialogHandler = () => {
    setIsDialogOpen((e) => !e);
  };

  const confirmHandler = () => {
    console.log("confirm");
  };
  const declineHandler = () => {
    console.log("decline");
  };

  return (
    <div>
      <button onClick={dialogHandler}>open dialog box</button>
      {isDialogOpen && (
        <Dialog
          title="Nowy tutayl"
          desc="lorem asdas loare  asdasd asda. asdasda s."
          closeModal={dialogHandler}
          confirm={confirmHandler}
          decline={declineHandler}
        />
      )}
    </div>
  );
};

export default Task1;
