//  MyFun.js
import * as React from '../react/packages/react';
import { useEffect, createElement, useState } from '../react/packages/react';
export default function BadFC(props) {
  function longTimeFun () {
    
    const current = new Date().getTime()
    while(new Date().getTime() - current < 200) {}
    console.log('profiler 使用')
  }
  longTimeFun()
  return (
    <div className='BadFC'>
      BadFC
    </div>
  )
}
