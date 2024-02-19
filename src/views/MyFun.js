//  MyFun.js
import * as React from '../react/packages/react';
import { useEffect, createElement, useState } from '../react/packages/react';
export default function MyFun(props) {
  console.log('MyFun组件运行了')
  const [count, setCount] = useState(1)
  return (
    <div className='MyFun'>
      <div>MyFun组件</div>
      <div>state: {count}</div>
      <div>name: {props.name}</div>
    </div>
  )
}
