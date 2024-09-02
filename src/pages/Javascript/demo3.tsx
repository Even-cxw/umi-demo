import React, { useState, useEffect } from 'react';
import Title from '../../components/Title';

function Demo3() {
  const [loading, setLoading] = useState<boolean>(false);

  // 1. 如何定义Map-方法一
  let mapObj = new Map();
  mapObj.set('name', 'even');
  mapObj.set('age', 25);
  console.log(mapObj.get('name')); // even
  console.log(mapObj.get('age')); // 25

  // 1. 如何定义Map-方法二
  let a = {name: '名称'};
  let mapObj2 = new Map<any,any>([
    [a, 'even'],
    ['age', 25]
  ]);

// 1. 如何定义Set-方法一
  let setObj = new Set();
  setObj.add('name');
  setObj.add('age');


  // 1. 如何定义Set-方法二
  let setObj2 = new Set(['name', 'age']);


  return (
    <div>
      <Title>Set Map</Title>

      <h1>Map</h1>
      <p>1. 如何定义Map (俩种方法)</p>
      <p>2. 如何使用Map</p>
      <p>3. Map与object的区别</p>

      <hr></hr>

      <h2>1. 如何定义Set (俩种方法)</h2>


    </div>
  );
}

export default Demo3;