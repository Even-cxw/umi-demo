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

  const fn1 = (data1: IGraphData, data2: IGraphData):IGraphData => {
    let a = {
      nodes: [],
      edges: [],
    }
    return a
  }


  return (
    <div>
      <p>1.将俩个对象数组进行合并 concat</p>
      <p>concat : 不会改变原有数组、返回新数组</p>
    </div>
  )
}


export default Demo2