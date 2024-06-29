
import React, { useEffect } from 'react'
import G6 from '@antv/g6';

const data = {
  nodes: [
    { id: 'node0', size: 50,  x: 800, y: 800, label: '123'},
    { id: 'node1', size: 30, type: 'rect', label:'456'},
    { id: 'node2', size: 30, type: 'circle'},
    { 
      id: 'node3', 
      size: 30,
      type: 'star', // shape 类型  https://g6.antv.antgroup.com/manual/middle/elements/nodes/default-node
      label: '五角星', // shape 标题
      style: { // shape 样式控制
        fill: 'yellow',// 填充色
        stroke: '#0f0', // 线填充色
      },
      labelCfg: { // 控制label的样式
        style: {
          fill: 'black'
        } 
      }
      },
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
    { 
      source: 'node0', 
      target: 'node1' ,
      style: {
        endArrow: true, // 箭头 https://g6.antv.antgroup.com/manual/middle/elements/edges/arrow
        startArrow: true
      }
    },
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

  useEffect(() => {
    if(!graph) {
      // 实例化 Minimap

      // G6 - 小地图插件
      const minimap = new G6.Minimap()

      // 实例化 Graph
      graph = new G6.Graph({
        container: ref.current,
        width: 800,
        height: 600,
        plugins: [minimap], // 插件配置选项
        modes: {
          // 具体参考 【核心概念/交互与事件/内置的Behavior】 https://g6.antv.antgroup.com/manual/middle/states/default-behavior
          default: [
            'drag-canvas',  // 拖拽canvas
            'zoom-canvas',   // 缩放canvas
            'drag-node', // 拖拽节点
            {
              type: 'tooltip', // 鼠标悬浮
              formatText(model) {
                return 111;
              },
              offset: 10,
            },
          ]
        },
        defaultNode: { // 默认节点
          type: 'rect',
          labelCfg: {
            style: {
              // fill: '#000000A6',
              fill: 'red',
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
            return 130;
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
    
    // 初始化数据
    graph.data(data)
    // 渲染数据
    graph.render()
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

  }, [])

  // 修改画布颜色
  return <div ref={ref} style={{ width: 800, height: 600, backgroundColor: 'black' }}></div>
}

export default Tutorital
