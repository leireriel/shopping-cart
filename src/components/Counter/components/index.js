import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { addOne, removeOne } from 'actions';
import { containerStyle, buttonStyle } from './styles';

const Counter = memo((item, { shop, dispatch }) => {
  console.log(item);

  return (
    <div className="App" >
      <header className="App-header">
        <h1>{shop?.item}</h1>
        <div style={containerStyle}>
          <button onClick={dispatch(removeOne(item))} type="button" style={buttonStyle}>
            -
          </button>
          <button onClick={dispatch(addOne(item))} type="button" style={buttonStyle}>
            +
          </button>
        </div>
      </header>
    </div>
  );
});

Counter.propTypes = {
  item: PropTypes.string.isRequired,
  shop: PropTypes.object.isRequired
}

export default Counter;
