import * as React from '../react/packages/react';
import { useState } from '../react/packages/react';
function Counter() {
  const [notUse, setNotUse] = useState(-1);
  const [addOne, setAddOne] = useState(0);

  const [addThree, setAddThree] = useState(998);
  
  function handleClick() {
    setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
  }
  // 1
  function handleClickFn() {
    setAddOne(count => count + 1);
    setAddThree(count => count + 3)
    setAddOne(count => count + 1);
    setAddThree(count => count + 3)
    setAddOne(count => count + 1);
  }
  // 3
  return (
    <>
      {addOne}
      <button onClick={handleClick}>+</button>
      <button onClick={handleClickFn}>+</button>
      {addThree}
    </>
  );
}

export default Counter
