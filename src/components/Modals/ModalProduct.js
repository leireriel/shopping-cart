import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { modalClose, addOne } from 'components/Shop/components/Product/modules/actions';
import IconClose from 'img/close_icon.svg';
import 'styles/modal.scss';

const ModalProduct = memo(() => {
  const copies = useSelector(state => state.modal.copies);
  const dispatch = useDispatch();

  const handleModalClose = () => dispatch(modalClose());
  const handleAddOne = () => dispatch(addOne({ product:copies.title, price:copies.price }));

  return (
    <div className='modal-window'>
      <img
        onClick={handleModalClose}
        className="modal-close"
        src={IconClose}
        alt="Close modal"
      />
      <div className='modal-content'>
        <div className='modal-image'>
          <div>
          <img className='image' src={copies.imgSrc} alt={copies.imgAlt} />
          </div>
        </div>
        <div className='modal-text'>
          <h1>{copies.title}</h1>
          <p>{copies.price + copies.currency}</p>
          <p>{copies.description}</p>
          <p>{copies.footer}</p>
          <button onClick={handleAddOne}>
            {copies.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
});

ModalProduct.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ModalProduct;
