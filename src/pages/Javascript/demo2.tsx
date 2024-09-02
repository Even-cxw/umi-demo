import React, { useState, useEffect } from 'react';
import Title from '@/components/Title';

function Demo2() {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div>
      <Title>includes方法</Title>
      <p>在数组中，includes() 用于检查某个元素是否存在。</p>
      <p>在字符串中，includes() 用于检查某个子字符串是否存在。</p>
      <p>includes() 方法返回一个布尔值，如果元素或子字符串存在，则返回 true，否则返回 false。</p>
    </div>
  );
}

export default Demo2;