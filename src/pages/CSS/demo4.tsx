import React, { useState, useEffect } from 'react';
import { Link } from 'umi';
import { Button } from 'antd';

const Demo1:React.FC = ()=> {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {

  }, []);

  return (
    <div>
      <Link to="/"><Button type="dashed">回到首页</Button></Link>
      <hr></hr>
      如下给文字添加悬浮动画
      <div className='grid grid-cols-4 grid-rows-3 gap-4 p-2 rounded-2xl bg-slate-300'>
        <div className="bg-pink-300 rounded-2xl p-8 hover:font-bold">11111</div>
        <div className="bg-pink-300 rounded-2xl p-8 hover:text-xl">22222</div>
        <div className="bg-pink-300 rounded-2xl p-8 hover:text-cyan-400">3</div>
        <div className="bg-pink-300 rounded-2xl p-8 hover:decoration-blue-400">4444</div>

        
        <div className="bg-pink-300 rounded-2xl p-8 hover:shadow-lg"></div>
        <div className="bg-pink-300 rounded-2xl p-8 hover:scale-105 transition"></div>


      </div>
    </div>
  );
}

export default Demo1;