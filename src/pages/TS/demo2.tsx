import React from 'react';

interface INodesOBj {
  id: string|number,
  label?: string,
  visible?: boolean,
  [key:string]: any
}

interface IEdges {
  id: string|number,
  source: string|number,
  target: string|number,
  visible?: boolean,
  [key: string]: any,
}


//题目: 定义一个泛型接口 Wrapper ，它可以将任何类型 T 包装在一个对象中，并提供一个方法 getValue 来获取这个值。
interface Wrapper<T> {
  value: T,
  getValue:() => T
}

interface IGraphData {
  nodes:INodesOBj[],
  edges: IEdges[]
}

const Demo2:React.FC = () => {

  let baseData: IGraphData = {
    nodes: [],
    edges: [],
  }

  let childrenData:IGraphData = {
    nodes: [],
    edges: []
  }

  const fn = <T extends IGraphData>(data1:T,data2:T):T => {
    return {
      nodes:data1.nodes.concat(data2.nodes),
      edges:data1.edges.concat(data2.edges),
    } as T
  }


  

  return (
    <div>
      <p>如上代码：如何用泛形写？</p>
    </div>
  )
}


export default Demo2