import * as React from './react/packages/react';
import { useEffect, createElement, useState } from './react/packages/react';

import MyFun from './views/MyFun.js';
import MyClass from './views/MyClass.js';

export default function App(props) {
  const [testValue] = useState(123213)
  console.log('App组件运行了')
  useEffect(() => {
    console.log('App useEffect')
  }, [])
  return (
    <div className="App">
      <div>react源码调试  <div>1111</div> {testValue}</div>
      <MyFun name='MyFun'></MyFun>
      <MyClass name='MyClass'></MyClass>
    </div>
  );
}

