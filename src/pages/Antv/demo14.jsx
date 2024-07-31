import React, { useEffect, useRef } from 'react';
import G6 from '@antv/g6';
import { useWindowSize } from 'react-use';
import branch_base from '@/assets/branch_base.png'
import {Button} from 'antd';
import { Link } from "umi";
const data = {
  nodes: [
    { 
      id: 'node0', 
      size: 100, 
      // type:'region-image',    
      label: '吉星高照',
      imgOptions: {
        size: [120, 80], 
        img: branch_base, 
      }, 
    },
    { 
      id: 'node1', 
      size: 100, 
      // type:'region-image',    
      label: '沉鱼落雁1',
      imgOptions: {
        size: [120, 80], 
        img: branch_base, 
      }, 
    },
  ],
  edges: [
   {
    source: 'node0',
    target: 'node1',
   }
  ],
};


const Tutorial = () => {
  const ref = useRef(null);
  const { width, height } = useWindowSize();
  let graphRef = useRef(null);

  useEffect(() => {
    console.log('width', width)
    console.log('height', height)
    let graph = graphRef.current;
    if (!graph || graph.get('destroyed')) return;
    // 动态修改canvas宽高
    graph.changeSize(width, height);
  }, [width, height])

  useEffect(() => {
    initGraph();
  }, []);

  const initGraph = () => {
    if (!graphRef.current) {
      // 注册graph节点
      graphRef.current = new G6.Graph({
        container: ref.current,
        width,
        height,
        linkCenter: true,
        minZoom: 0.1, // 最小可操作的缩放比例
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'drag-node', 
            'shortcuts-call' //  control 与 1，对图进行适应画布
          ]
        },
        defaultNode: {
          type: 'rect',
          labelCfg: {
            style: {
              fill: '#000000A6',
              fontSize: 10
            }
          },
          style: {
            stroke: '#72CC4A',
            width: 150
          }
        },
        defaultEdge: {
          // type: 'polyline',
          style: { stroke: 'l(0) 0:rgba(255, 255, 255, 0) 0.5:#7ec2f3 1:rgba(255, 255, 255, 0)' },
          labelCfg: {
            autoRotate: true,
            style: {
              fill: '#fff',
            }
          },
        },
        nodeStateStyles: {
          hover: {
            stroke: 'red',
            lineWidth: 3
          }
        },
        edgeStateStyles: {
          hover: {
            stroke: 'blue',
            lineWidth: 5
          },
          click: {
            stroke: 'red',
            lineWidth: 5
          }
        },
        fitView: true,
        fitViewPadding: 100,
      });
      graphRef.current.data(data);
      graphRef.current.render();
    }
  };

  return <div ref={ref} style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
    <div style={{position: 'absolute'}}>
      <Link to="/">
        <Button type="dashed">回到首页</Button>
      </Link>
    </div>
  </div>;
};

export default Tutorial;
