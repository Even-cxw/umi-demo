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
      type:'region-image',    
      label: '吉星高照',
      imgOptions: {
        size: [120, 80], 
        img: branch_base, 
      }, 
    },
    { 
      id: 'node1', 
      size: 100, 
      type:'region-image',    
      label: '沉鱼落雁1',
      imgOptions: {
        size: [120, 80], 
        img: branch_base, 
      }, 
    },
    { 
      id: 'node2', 
      size: 100, 
      type:'region-image',    
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
    label: '123'
   },
   {
    source: 'node1',
    target: 'node2',
   }
  ],
};

const data1 = {
  nodes: [
    {
      id: 'node0', 
      size: 100, 
      type:'region-image',    
      label: '返璞归真',
      imgOptions: {
        size: [120, 80], 
        img: branch_base, 
      }, 
    },
    { 
      id: 'node1', 
      size: 100, 
      type:'region-image',    
      label: '沉鱼落雁',
      imgOptions: {
        size: [120, 80], 
        img: branch_base, 
      }, 
    },
  ],
};

const Tutorial = () => {
  const ref = useRef(null);
  const { width, height } = useWindowSize();
  let graphRef = useRef(null);


  useEffect(() => {
    initGraph();
  }, []);

  const initGraph = () => {
    if (!graphRef.current) {
      // 注册graph节点
      initNode()
      graphRef.current = new G6.Graph({
        container: ref.current,
        width,
        height,
        linkCenter: true,
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'drag-node']
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
          style: { 
            stroke: 'l(0) 0:rgba(255, 255, 255, 0) 0.5:#7ec2f3 1:rgba(255, 255, 255, 0)', 
            cursor: 'pointer',// 添加手指悬浮
          },
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
      initNodeEvent()
      initEdgeEvent()
    }
  };

  const initNode=()=>{
    G6.registerNode(
      'region-image',
      {
        options: {
          style: {},
          stateStyles: {
            hover: {},
            selected: {},
          },
        },
        /**
         * 绘制节点，包含文本
         * @param  {Object} cfg 节点的配置项 =>label等节点通用属性
         * @param  {G.Group} group 图形分组，节点中图形对象的容器
         * @return {G.Shape} 返回一个绘制的图形作为 keyShape，通过 node.get('keyShape') 可以获取。
         * 关于 keyShape 可参考文档 核心概念-节点/边/Combo-图形 Shape 与 keyShape
         */
        draw(cfg, group) {
          let imgOptions = cfg.imgOptions;
          const keyShape = group.addShape('image', {
            attrs: {
              cursor: 'pointer', // 添加悬浮手势
              x: - imgOptions.size[0] / 2,
              y: - imgOptions.size[1] / 2,
              width: imgOptions.size[0],
              height: imgOptions.size[1],
              img: imgOptions.img,
            },
            name: 'region-image-shape'
          });

          if (cfg.label) {
            group.addShape('text', {
              attrs: {
                cursor: 'pointer', // 添加悬浮手势
                // x: - imgOptions.size[0] / 2,
                y: - imgOptions.size[1] / 2 - 20,
                x: 0,
                // y: 0,
                text: cfg.label,
                textAlign: 'center',
                textBaseline: 'middle',
                fontSize: 26,
                fill: '#fff',
              },
              name: 'region-image-label'
            });
          }

          return keyShape
        },
        setState: (name, value, item) => {
          console.log('name, value, item', name, value, item);
        }
      },
      // 继承内置节点类型的名字，例如基类 'single-node'，或 'circle', 'rect' 等
      // 当不指定该参数则代表不继承任何内置节点类型
      // 'rect',
    );
  }

  const initNodeEvent=() => {
    // 添加点击事件
    let graph = graphRef.current;
    graph.on('node:click', evt => {
      console.log('evt', evt)
      graph.setItemState(evt.item, 'hover', true)
    })
  }

  // 清除图上所有边的 focus 状态及相应样式
  const clearClickEdgeState = (graph) => {
    const focusEdges = graph.findAllByState('edge', 'click');
    focusEdges.forEach((fedge) => {
      graph.setItemState(fedge, 'click', false);
    });
  };

  const initEdgeEvent = () => {
    let graph = graphRef.current;
    graph.on('edge:click', evt => {
      clearClickEdgeState(graph)
      console.log('evt', evt)
      graph.setItemState(evt.item, 'click', true)
    })
    graph.on('edge:mouseenter', evt => {
      graph.setItemState(evt.item, 'hover', true)
    })

    graph.on('edge:mouseleave', evt => {
      graph.setItemState(evt.item, 'hover', false)
    })
  }

  const handleTitle = () => {
    // 解决数据切换-重新渲染问题
    graphRef.current.changeData(data1)
    graphRef.current.refresh()
  }

  return <div ref={ref} style={{ width, height, backgroundColor: 'black' }}>
    <div style={{position: 'absolute'}}>
      <Link to="/">
        <Button type="dashed">回到首页</Button>
      </Link>
      <Button type="dashed" onClick={handleTitle}>切换标题</Button>
    </div>
  </div>;
};

export default Tutorial;
