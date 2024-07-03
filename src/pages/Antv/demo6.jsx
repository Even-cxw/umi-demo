
import React, { useEffect } from 'react'
import G6 from '@antv/g6';
import { useWindowSize } from 'react-use';

const data = {
  nodes: [
    { id: 'center1', size: 30, label: '1', layoutType: 'center', y: 200, x: 250},
    { id: 'center2', size: 30, label: '2', layoutType: 'center', y: 200, x: 150 },
    { id: 'node2',label: '12', size: 30 },
    { id: 'node3',label: '13', size: 30 },
    { id: 'node4',label: '14', size: 30 },
    { id: 'node5',label: '15', size: 30 },
    { id: 'node6',label: '16', size: 15 },
    { id: 'node7',label: '17', size: 15 },
    { id: 'node8',label: '18', size: 15 },
    { id: 'node9',label: '19', size: 15 },
  ],
  edges: [
    { source: 'center1', target: 'node2' },
    { source: 'center1', target: 'node2' },
    { source: 'center1', target: 'node3' },
    { source: 'center1', target: 'node8' },
    { source: 'center1', target: 'node9' },
    { source: 'center1', target: 'node3' },
    { source: 'center1', target: 'node4' },
    { source: 'center1', target: 'node7' },
    { source: 'center1', target: 'node6' },
    { source: 'center2', target: 'node5' },
    { source: 'center2', target: 'node6' },
    { source: 'center2', target: 'node7' },
    { source: 'center2', target: 'node8' },
  ],
};

const Tutorital = () => {
  const ref = React.useRef(null)
  let graph = null
  const { width, height } = useWindowSize();

  useEffect(() => {
    if(!graph) {
      // 实例化 Minimap
      setTimeout(() => {
        console.log('G6', G6);
      }, 1000)
      const edgeBundling = new G6.Bundling({
        bundleThreshold: 0.6,
        K: 100,
      });
      // 实例化 Graph
      graph = new G6.Graph({
        container: ref.current,
        width,
        height,
        plugins: [edgeBundling],
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
          type: 'line'
        },
        layout: {
          // type:'concentric'
          pipes: [
            {
              type: 'circular',
              center: [200, 200],
              nodesFilter: (node) => {
                console.log('node', node);
                return node.layoutType !== 'center' // 返回true时，表示使用此布局
              }
            }
          ]
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
        },
        fitCenter: true,
      })
    }
    edgeBundling.bundling(data);
    graph.data(data)
  
    graph.render()

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

  }, [])

  return <div ref={ref} style={{ width, height, backgroundColor: 'black' }}></div>
}

export default Tutorital
