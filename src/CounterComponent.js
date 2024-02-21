

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const increment = (pay) => ({
  type: 'INCREMENT'
});
const decrement=()=>({
    type: 'DECREMENT'
})

const CounterComponent = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const handleIncrement = () => {
    dispatch(increment(),);
  };
  const handleDecrement=()=>{
    dispatch(decrement());
  }

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default CounterComponent;
