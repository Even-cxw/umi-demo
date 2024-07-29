import { Button } from 'antd';
import React, { useState, useEffect } from 'react';

function Demo1() {
  const [loading, setLoading] = useState(false);
  const [num, setNum] = useState(1)
  const [price, setPrice] = useState(12)

  useEffect(() => {

  }, []);

  return (
    <div>
      <p>数量{num}</p>
      <p>价格{price}</p>
      <Button onClick={() => {setNum(num+1)}}>数量加一</Button>
      <br></br>
      <p>
        在 React 中，当组件的状态发生变化时，组件会重新渲染。但是，组件的状态初始化只在组件首次挂载时执行一次。在你的代码中，const [price, setPrice] = useState(12) 这行代码中的 useState(12) 只会在组件首次渲染时执行，并设置 price 的初始值为 12。之后，price 的值只会通过 setPrice 函数来改变，而不会在每次重新渲染时重新初始化。
        因此，当你点击“数量加一”按钮时，setNum(2) 会更新 num 的状态，从而触发组件重新渲染。但是，这不会重新初始化 price 的状态。price 的值会保持不变，除非你调用 setPrice 来改变它。
      </p>
    </div>
  );
}

export default Demo1;