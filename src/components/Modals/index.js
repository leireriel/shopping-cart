import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import ModalProduct from 'components/Modals/ModalProduct';

const Modal = memo(() => {
  const tipe = useSelector(state => state.modal.modalType);

  return (
    tipe === 'product' && <ModalProduct />
  );
});

export default Modal;
