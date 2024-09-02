import React from "react";
import Title from "@/components/Title";

const Demo1: React.FC = () => {
  return (
    <div>
      <Title>encodeURI decodeURI</Title>
      <div>
        <p>encode前: ?name=zhangsan&age=20</p>
        <p>encode后: {encodeURI('?name=zhangsan&age=20')}</p>
        <br></br>
        <p>encode前: ?name=zhang san&age=2 0</p>
        <p>encode后: {encodeURI('?name=zhang san&age=2 0')}</p>
      </div>
      <h2><span className="font-bold">encodeURI的作用:</span>将特殊字符转为%xx的形式，以便在URL中传输。但是对<span className="text-red-500 font-bold">特殊标点符号</span>不会进行转译(？&)</h2>
      <h2><span className="font-bold">ASCII：</span>是一种字符编码标准，使用二进制来进行表示</h2>

      <Title>encodeURIComponent</Title>
      <p>encode前: ?name=zhangsan&age=20</p>
        <p>encode后: {encodeURIComponent('?name=zhangsan&age=20')}</p>
        <br></br>
        <p>encode前: ?name=zhang san&age=2 0</p>
        <p>encode后: {encodeURIComponent('?name=zhang san&age=2 0')}</p>
    </div>
  )
};

export default Demo1;