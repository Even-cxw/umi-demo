import React, { useState, useEffect } from 'react';
import { Link } from 'umi';
import { Button } from 'antd';
import demo3 from '@/assets/CSS/demo3.png'

const Demo1:React.FC = ()=> {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {

  }, []);

  return (
    <div>
      <Link className='px-4 py-4' to="/"><Button type="dashed">回到首页</Button> </Link>
      <hr></hr>
      <div className='grid grid-cols-2 pt-3 gap-4'>
        <div className='flex flex-col justify-center items-center'>
          使用grid布局，实现如下图效果：
          <img height={'200px'} width={'100%'} src={demo3} />
        </div>

        {/* 实现代码 */}
        <div className='bg-pink-200 p-8 rounded-2xl grid grid-cols-3 grid-rows-3 grid-flow-row gap-4'>
          <div className='bg-orange-300 rounded-2xl text-center col-span-3'>1</div>
          <div className='bg-orange-300 rounded-2xl text-center col-span-1'>2</div>
          <div className='bg-orange-300 rounded-2xl text-center col-span-1'>3</div>
          <div className='bg-orange-300 rounded-2xl text-center col-span-1'>4</div>
          <div className='bg-orange-300 rounded-2xl text-center grid-col-subgrid col-start-2 col-span-1 '>6</div>
        </div>



      </div>
    </div>
  );
}

export default Demo1;