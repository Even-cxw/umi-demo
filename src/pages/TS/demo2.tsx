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


  return (
    <div>
      <p>1.将俩个对象数组进行合并</p>
    </div>
  )
}


export default Demo2