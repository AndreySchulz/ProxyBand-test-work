import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Overlay, ModalBox, ModalBtn } from './Modal.styled';
const modalRoot = document.querySelector('#modal');

const Modal = ({ modalData, closeModal }) => {
  const handleCloseByEsc = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleCloseByEsc);
    return () => {
      window.removeEventListener('keydown', handleCloseByEsc);
    };
  });

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalBox>
        <ModalBtn
          type="button"
          onClick={() => {
            closeModal();
          }}
        >
          X
        </ModalBtn>
        {modalData.map(({ id, title }) => {
          return <li key={id}>{title}</li>;
        })}
      </ModalBox>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
