
import React, { useEffect } from 'react'
import G6 from '@antv/g6';
import { useWindowSize } from 'react-use';

const data = {
  nodes: [
    { id: 'node0', size: 50, label: 11},
    { id: 'node1', size: 30, label: 22},
  ],
  edges: [
    { source: 'node0', target: 'node1', label: 33 },
  ],
};

const Tutorital = () => {
  const ref = React.useRef(null)
  let graph = null
  const { width, height } = useWindowSize();

  useEffect(() => {
    initGraph();
    initGraphEvent();
  }, [])


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
          labelCfg: {
            position: 'left',
            style: {
              background: {
                fill: '#ffffff',
                stroke: 'green',
                padding: [3, 2, 3, 2],
                radius: 2,
                lineWidth: 3,
              },
            },
          }
        },
        defaultEdge: {
          labelCfg: {
            autoRotate: true,
            style: {
              background: {
                fill: '#ffffff',
                stroke: '#000000',
                padding: [2, 2, 2, 2],
                radius: 2,
              },
            },
          }
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
