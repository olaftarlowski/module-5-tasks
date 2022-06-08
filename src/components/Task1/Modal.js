import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;
`;

const Modal = ({ children }) => {
  return <ModalWrapper>{children}</ModalWrapper>;
};

export default Modal;
