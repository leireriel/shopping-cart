import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { modalClose, addOne } from 'components/Shop/components/Product/modules/actions';
import IconClose from 'img/close_icon.svg';
import 'styles/modalProduct.scss';

const ModalProduct = memo(() => {
  const copies = useSelector(state => state.modal.copies);
  const dispatch = useDispatch();

  const handleModalClose = () => dispatch(modalClose());
  const handleAddOne = () => dispatch(addOne({ product: copies.name, price: copies.price }));

  return (
    <div className='modal-window'>
      <img
        onClick={handleModalClose}
        className='icon-close'
        src={IconClose}
        alt='Close modal'
      />
      <div className='modal-content'>
        <aside>
          <div>
            <img className='image' src={copies.imgSrc} alt={copies.imgAlt} />
          </div>
        </aside>
        <section>
          <div className='title'>
            <h1>{copies.name}</h1>
            <p>{copies.price + copies.currency}</p>
          </div>
          <hr />
          <p>{copies.description}</p>
          <hr />
          <p className='code'>{copies.code}</p>
          <button onClick={handleAddOne}>{copies.buttonText}</button>
        </section>
      </div>
    </div>
  );
});

export default ModalProduct;
