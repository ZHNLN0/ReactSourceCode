import * as React from '../react/packages/react';
import { useState, useEffect, useLayoutEffect } from '../react/packages/react';
function Counter() {
  const [effectCount, setEffectCount] = useState(9527);
  const [addOne, setAddOne] = useState(0);

  const [addThree, setAddThree] = useState(998);
  
  function handleClick() {
    setEffectCount(effectCount + 1);
  }

  useLayoutEffect(() => {
    console.log(effectCount, 'setEffectCount')

    return () => {
      console.log('afterEffect')
    }
  }, [effectCount])

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
      {effectCount}
      <button onClick={handleClick}>+</button>
      <button onClick={handleClickFn}>+</button>
      {addThree}-{addOne}
    </>
  );
}

export default Counter
