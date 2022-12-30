import styled from 'styled-components';
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
export const ModalBox = styled.ul`
  position: relative;
  background-color: white;

  padding: 20px;
  list-style: inside;
`;
export const ModalBtn = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  background-color: #03a9f491;
  border: none;
  color: gray;
  border-radius: 50px;
  cursor: pointer;
`;
