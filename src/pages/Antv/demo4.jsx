
import React, { useEffect } from 'react'
import G6 from '@antv/g6';
import { useWindowSize } from 'react-use';

const data = {
  nodes: [
    { id: 'node0', size: 50,  x: 800, y: 800, label: '123'},
    { id: 'node1', size: 30 },
    { id: 'node2', size: 30 },
    { id: 'node3', size: 30 },
    { id: 'node4', size: 30 },
    { id: 'node5', size: 30 },
    { id: 'node6', size: 15 },
    { id: 'node7', size: 15 },
    { id: 'node8', size: 15 },
    { id: 'node9', size: 15 },
    { id: 'node10', size: 15 },
    { id: 'node11', size: 15 },
    { id: 'node12', size: 15 },
    { id: 'node13', size: 15 },
    { id: 'node14', size: 15 },
    { id: 'node15', size: 15 },
    { id: 'node16', size: 15 },
  ],
  edges: [
    { source: 'node0', target: 'node1' },
    { source: 'node0', target: 'node2' },
    { source: 'node0', target: 'node3' },
    { source: 'node0', target: 'node4' },
    { source: 'node0', target: 'node5' },
    { source: 'node1', target: 'node6' },
    { source: 'node1', target: 'node7' },
    { source: 'node2', target: 'node8' },
    { source: 'node2', target: 'node9' },
    { source: 'node2', target: 'node10' },
    { source: 'node2', target: 'node11' },
    { source: 'node2', target: 'node12' },
    { source: 'node2', target: 'node13' },
    { source: 'node3', target: 'node14' },
    { source: 'node3', target: 'node15' },
    { source: 'node3', target: 'node16' },
  ],
};

const Tutorital = () => {
  const ref = React.useRef(null)
  let graph = null
  const { width, height } = useWindowSize();

  useEffect(() => {
    if(!graph) {
      // 实例化 Minimap

      // 实例化 Graph
      graph = new G6.Graph({
        container: ref.current,
        width,
        height,
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'drag-node']
        },
        defaultNode: { // 默认节点
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
        defaultEdge: { // 默认边
          type: 'line'
        },
        layout: { // 布局
          type: 'force', // 力导向布局
          preventOverlap: true, // 防止节点重叠
          linkDistance: d => { // 设置俩个节点连线的距离
            if (d.source.id === 'node0') {
              return 100;
            }
            return 30;
          },
        },
        nodeStateStyles: { // 节点状态样式
          hover: {
            stroke: 'red',
            lineWidth: 3
          }
        },
        edgeStateStyles: { // 边状态样式
          hover: {
            stroke: 'blue',
            lineWidth: 3
          }
        }
      })
    }
    
  
    graph.data(data)   // 初始化数据
    graph.render()    // 渲染数据

    
    // initGlobalEvent(graph) // 添加全局事件
    // initCanvasEvent(graph) // canvas事件
    // initShapeEvent(graph) // 节点/边/combo 上的事件
    initShapeTypeEvent(graph) // 图形上的事件


  }, [])


  const initGlobalEvent = (graph) => {
    graph.on('click', (ev) => {
      const shape = ev.target;
      const item = ev.item;
      console.log('shape', shape, 'item', item);
      if (item) {
        const type = item.getType();
        console.log('type', type)
      }
    });
  }

  const initCanvasEvent = (graph) => {
    graph.on('canvas:click', (ev) => {
      const shape = ev.target;
      const item = ev.item;
      console.log('shape', shape, 'item', item);
      if (item) {
        const type = item.getType();
        console.log('type', type)
      }
    });
  }

  const initShapeTypeEvent = (graph) => {
    graph.on('rect-shape:click', (ev) => {
      const shape = ev.target; // 被点击的图形
      const item = ev.item; // 被点击的节点或边
      const model = item.getModel(); // 获取模型数据

      alert(`Circle shape clicked: ${model.label}`);
      // 可以在这里执行更多的操作，例如改变形状的样式
      shape.attr('fill', '#ff0000'); // 改变点击的圆形颜色为红色
    });
  }

  const initShapeEvent = (graph) => {
    // 添加hover事件
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




  // 修改画布颜色
  return <div ref={ref} style={{ width, height, backgroundColor: 'black' }}></div>
}

export default Tutorital
