import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addOne, removeOne } from 'actions';

const Counter = memo(() => {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(addOne(5))}>+</button>
      <button onClick={() => dispatch(removeOne())}>-</button>

      {isLogged && (
        <h3>Valuable information I shouldn't see if I'm not logged in</h3>
      )}
    </div>
  );
})

// Counter.propTypes = {
//   item: PropTypes.string.isRequired,
//   shop: PropTypes.object.isRequired
// }

export default Counter;
