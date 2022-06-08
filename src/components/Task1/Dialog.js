import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
import styled, { keyframes } from "styled-components";

const moveDown = keyframes`
  from {
    transform: translateY(-50px);
  }

  to {
    transform: translateY(0);
  }
`;

const DialogBox = styled.div`
  animation: ${moveDown} 0.5s;
  max-width: 700px;
  margin: 0 auto;
  background-color: #fff;
  padding: 24px;

  .dialog__header {
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
  }

  span {
    padding: 12px;
    border: 2px solid black;
    cursor: pointer;
  }
`;

const Dialog = ({ closeModal, title, desc, confirm, decline }) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop closeModal={closeModal} />,
        document.getElementById("overlay-root")
      )}
      {ReactDOM.createPortal(
        <Modal closeModal={closeModal}>
          <DialogBox>
            <div className="dialog__header">
              <h2>{title}</h2>
              <span onClick={closeModal}>X</span>
            </div>
            <p>{desc}</p>
            <div>
              <button onClick={confirm}>Confirm</button>
              <button onClick={decline}>Decline</button>
            </div>
          </DialogBox>
        </Modal>,
        document.getElementById("modal-root")
      )}
    </div>
  );
};

export default Dialog;
