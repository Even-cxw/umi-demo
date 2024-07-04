
import React, { useEffect } from 'react'
import G6 from '@antv/g6';
import { useWindowSize } from 'react-use';

const data = {
  nodes: [
    { id: 'node0', size: 50,     anchorPoints: [
      [0, 0.5],
      [1, 0.5],
    ],},
    { id: 'node1', size: 50,    anchorPoints: [
      [0, 0.5],
      [1, 0.5],
    ], },
    { id: 'node2', size: 50 ,    anchorPoints: [
      [0, 0.5],
      [1, 0.5],
    ],},
  ],
  edges: [
    { source: 'node0', target: 'node1', type: 'region-edge' },
    { source: 'node0', target: 'node2', type: 'region-edge' },
  ],
};

const Tutorital = () => {
  const ref = React.useRef(null)
  let graph = null
  const { width, height } = useWindowSize();

  useEffect(() => {
    initEdge()
    initGraph();
    initGraphEvent();
  }, [])

  const initEdge = () => {
    G6.registerEdge('region-edge', {
      draw(cfg, group) {
        const startPoint = cfg.startPoint;
        const endPoint = cfg.endPoint;
        const shape = group.addShape('path', {
          attrs: {
            stroke: '#fff',
            path: [
              ['M', startPoint.x, startPoint.y],
              ['L', endPoint.x / 3 + (2 / 3) * startPoint.x, startPoint.y], // 三分之一处
              ['L', endPoint.x / 3 + (2 / 3) * startPoint.x, endPoint.y], // 三分之二处
              ['L', endPoint.x, endPoint.y],
            ],
          },
          // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
          name: 'path-shape',
        });
        return shape;
      },
    })
  }

  const initGraph = () => {
    if(!graph) {
      // 实例化 Graph
      graph = new G6.Graph({
        container: ref.current,
        width,
        height,
        // 
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'drag-node']
        },
        defaultNode: {
          type: 'circle',
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
          type: 'line',
      
        },
        layout: {
          type: 'force',
          preventOverlap: true,
          linkDistance: d => {
            if (d.source.id === 'node0') {
              return 100;
            }
            return 30;
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
            lineWidth: 3
          }
        }
      })
      graph.data(data)
      graph.render()
    }
  }

  const initGraphEvent = () => {
    graph.on('node:mouseenter', evt => {
      graph.setItemState(evt.item, 'hover', true)
    })

    graph.on('node:mouseleave', evt => {
      graph.setItemState(evt.item, 'hover', false)
    })

    graph.on('edge:mouseenter', evt => {
      graph.setItemState(evt.item, 'hover', true)
    })

    graph.on('edge:mouseleave', evt => {
      graph.setItemState(evt.item, 'hover', false)
    })
  }

  return <div ref={ref} style={{ width, height, backgroundColor: 'black' }}></div>
}

export default Tutorital
