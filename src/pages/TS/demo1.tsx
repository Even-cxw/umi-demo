import React from "react";

// 1.如何定义React组件
const Demo1:React.FC = () => {

  // 实践 concat

  return (
    <div>
      <p>1. 如何定义react函数组件接口</p>
      <p>2. 如何定义*数组接口*</p>
      <p>3. 如何定义*对象数组接口*</p>
      <p>4. 如何定义 *对象中随意属性*</p>
      <p>5. 如何定义 *既有number又有string的数组接口*</p>
    </div>
  )
}

// 2. 如何定义数组接口
let a1: string[] = ['1','2'] 
let a2: number[] = [1,2]
// 3. 如何定义复杂类型的对象数组
interface IO1 {
  id: string,
  name: string | number,
  label?: string,
  [key:string]: any, // 4
}
let a3: IO1[] = [{id: '1', name: 2,age: 12}]

// 5 需要()包裹
let a4 : (number|string)[] = [1,'1']

export default Demo1;