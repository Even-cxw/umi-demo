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
    </div>
  );
}

export default Demo1;