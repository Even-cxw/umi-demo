
import React, { useEffect } from 'react'
import G6 from '@antv/g6';
import { useWindowSize } from 'react-use';

const data = {
  nodes: [
    { id: 'node0', size: 100},
    { id: 'node1', size: 100 },
  ],
  edges: [
    { source: 'node0', target: 'node1', type: 'region-edge2', curveOffset: -30, label: 1 },
    { source: 'node0', target: 'node1', type: 'region-edge2', curveOffset: -40, label: 1  },
    { source: 'node0', target: 'node1', type: 'region-edge1', curveOffset: -20, label: 1  },
    { source: 'node0', target: 'node1', type: 'region-edge1', curveOffset: -10 , label: 1 },
    { source: 'node0', target: 'node1', type: 'region-edge1', curveOffset: 10 , label: 1 },
    { source: 'node0', target: 'node1', type: 'region-edge2', curveOffset: 20 , label: 1 },
    { source: 'node0', target: 'node1', type: 'region-edge2', curveOffset: 30 , label: 1 },
    { source: 'node0', target: 'node1', type: 'region-edge2', curveOffset: 40 , label: 1 },
    { source: 'node0', target: 'node1', type: 'region-edge2', curveOffset: 50 , label: 1 },
    { source: 'node0', target: 'node1', type: 'region-edge2', curveOffset: 60 , label: 1 },
    { source: 'node0', target: 'node1', type: 'region-edge2', curveOffset: 70 , label: 1 },
    { source: 'node0', target: 'node1', type: 'region-edge2', curveOffset: 80 , label: 1 },
    { source: 'node0', target: 'node1', type: 'region-edge2', curveOffset: 90 , label: 1 },
    { source: 'node0', target: 'node1', type: 'region-edge2', curveOffset: 100 , label: 1 },
    { source: 'node0', target: 'node1', type: 'region-edge2', curveOffset: 110 , label: 1 },
    { source: 'node0', target: 'node1', type: 'region-edge2', curveOffset: 120 , label: 1 },
    { source: 'node0', target: 'node1', type: 'region-edge2', curveOffset: 130 , label: 1 },
  ],
};

const Tutorital = () => {
  const ref = React.useRef(null)
  let graph = null
  const { width, height } = useWindowSize();

  useEffect(() => {
    initEdge1();
    initEdge2();
    initGraph();
    initGraphEvent();
  }, [])

  const initEdge1 =() => {
    G6.registerEdge('region-edge1', {
      afterDraw(cfg, group) {
        // 获得当前边的第一个图形，这里是边本身的 path
        const shape = group.get('children')[0];
        // 边 path 的起点位置
        const startPoint = shape.getPoint(0);
  
        // 添加红色 circle 图形
        const circle = group.addShape('circle', {
          attrs: {
            x: startPoint.x,
            y: startPoint.y,
            fill: 'red',
            r: 3,
          },
          // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
          name: 'circle-shape',
        });
  
        // 对红色圆点添加动画
        circle.animate(
          (ratio) => {
            // 每一帧的操作，入参 ratio：这一帧的比例值（Number）。返回值：这一帧需要变化的参数集（Object）。
            // 根据比例值，获得在边 path 上对应比例的位置。
            const tmpPoint = shape.getPoint(ratio);
            // 返回需要变化的参数集，这里返回了位置 x 和 y
            return {
              x: tmpPoint.x,
              y: tmpPoint.y,
            };
          },
          {
            repeat: true, // 动画重复
            duration: 3000,
          },
        ); // 一次动画的时间长度
      },

    }, 'quadratic')
  }

  const initEdge2 =() => {
    const lineDash = [4, 2, 1, 2];
    G6.registerEdge('region-edge2', {
      afterDraw(cfg, group) {
        // 获得该边的第一个图形，这里是边的 path
        const shape = group.get('children')[0];
        let index = 0;
        // 边 path 图形的动画
        shape.animate(
          () => {
            index++;
            if (index > 9) {
              index = 0;
            }
            const res = {
              lineDash,
              lineDashOffset: -index,
            };
            // 返回需要修改的参数集，这里修改了 lineDash,lineDashOffset
            return res;
          },
          {
            repeat: true, // 动画重复
            duration: 3000, // 一次动画的时长为 3000
          },
        );
      },
    }, 'quadratic')
  }

  const initGraph = () => {
    if(!graph) {
      // 实例化 Graph
      graph = new G6.Graph({
        container: ref.current,
        width,
        height,
        linkCenter: true, // 连接到节点的中心
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'drag-node']
        },
        defaultNode: {
          type: 'circle',
          // anchorPoints: [0.5, 0.5],
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
          type: 'polyline',
          labelCfg: {
            fill: '#fff',
          }
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
        fitView: true
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
