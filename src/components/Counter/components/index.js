import React, { memo } from 'react';
import { containerStyle, buttonStyle } from './styles';

const Counter = memo(({ number, dispatch }) => {
  const addOne = () => dispatch({ type: 'ADD_ONE' });

  const removeOne = () => dispatch({ type: 'REMOVE_ONE' });

  return (
    <div className="App" >
      <header className="App-header">
        <h1>{number}</h1>
        <div style={containerStyle}>
          <button onClick={removeOne} type="button" style={buttonStyle}>-</button>
          <button onClick={addOne} type="button" style={buttonStyle}>+</button>
        </div>
      </header>
    </div>
  );
})

export default Counter;
