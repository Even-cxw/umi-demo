import React, { useEffect, useRef, useState } from 'react';
import G6 from '@antv/g6';
import { useWindowSize, useMeasure } from 'react-use';
import branch_base from '@/assets/branch_base.png'
import { Button } from 'antd';
import { Link } from "umi";

const data = {
  nodes: [
    {
      id: 'node0',
      size: 100,
      type: 'region-image',
      label: '吉星高照',
      imgOptions: {
        size: [120, 80],
        img: branch_base,
      },
    },
    {
      id: 'node1',
      size: 100,
      type: 'region-image',
      label: '沉鱼落雁1',
      imgOptions: {
        size: [120, 80],
        img: branch_base,
      },
    },
    {
      id: 'node2',
      size: 100,
      visible: false,
      type: 'region-image',
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
      type: 'region-image',
      label: '返璞归真',
      imgOptions: {
        size: [120, 80],
        img: branch_base,
      },
    },
    {
      id: 'node1',
      size: 100,
      type: 'region-image',
      label: '沉鱼落雁',
      imgOptions: {
        size: [120, 80],
        img: branch_base,
      },
    },
  ],
};

const filterNum = (num) => {
  return Math.round((num) * 100) / 100;
}

const Tutorial = () => {
  const { width, height } = useWindowSize();
  let graphRef = useRef(null);
  let graphDom = useRef(null);
  const [leftDom, leftStyle] = useMeasure();
  const [leftWidthNum, setLeftWidthNum] = useState(30);

  /**
   * @desc 渲染逻辑
   * 1. 动态获取左侧left宽度
   * 2. 重新绘制grap - 防止出现滚动条
   */
  useEffect(() => {
    if (leftStyle.width === 0) return;
    // 判断是否第一次渲染
    if (graphRef.current) {
      let graph = graphRef.current;
      if (!graph || graph.get('destroyed')) return;
      console.log('leftStyle', leftStyle)
      console.log('width', width)
      graph.changeSize(leftStyle.width, height);// 重新改变花布
    } else {
      initGraph(leftStyle.width, height)
    }
  }, [leftStyle.width, width])

  const initGraph = (width, height) => {
    if (!graphRef.current) {
      initNode();
      graphRef.current = new G6.Graph({
        container: graphDom.current,
        width,
        height,
        linkCenter: true,
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'drag-node', 'shortcuts-call']
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
          style: {
            stroke: 'l(0) 0:rgba(255, 255, 255, 0) 0.5:#7ec2f3 1:rgba(255, 255, 255, 0)',
            cursor: 'pointer',
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
      initNodeEvent();
      initEdgeEvent();
    }
  };

  const initNode = () => {
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
        draw(cfg, group) {
          let imgOptions = cfg.imgOptions;
          group.addShape('rect', {
            attrs: {
              cursor: 'pointer',
              x: -imgOptions.size[0] / 2,
              y: -imgOptions.size[1] / 2,
              width: imgOptions.size[0],
              height: imgOptions.size[1],
              stroke: 'black',
              opacity: 0,
              fill: 'red',
            },
            draggable: true,
            name: 'rect-shape-Even',
          });

          let keyShape = group.addShape('image', {
            attrs: {
              cursor: 'pointer',
              x: -imgOptions.size[0] / 2,
              y: -imgOptions.size[1] / 2,
              width: imgOptions.size[0],
              height: imgOptions.size[1],
              img: imgOptions.img,
            },
            draggable: true,
            name: 'region-image-shape'
          });

          if (cfg.label) {
            group.addShape('text', {
              attrs: {
                cursor: 'pointer',
                y: -imgOptions.size[1] / 2 - 20,
                x: 0,
                text: cfg.label,
                textAlign: 'center',
                textBaseline: 'middle',
                fontSize: 26,
                fill: '#fff',
                draggable: true,
              },
              name: 'region-image-label'
            });
          }

          return keyShape;
        },
        update: undefined,
        setState: (name, value, item) => {
          console.log('name, value, item =>>>', name, value, item);
          const group = item.get('group');
          if (name === 'selected' && value) {
            const rectShape = group.find((e) => e.get('name') === 'rect-shape-Even');
            if (rectShape) rectShape.attr('opacity', 0.5);
          } else if (name === 'selected' && !value) {
            const rectShape = group.find((e) => e.get('name') === 'rect-shape-Even');
            if (rectShape) rectShape.attr('opacity', 0);
          }
        }
      },
      'single-node',
    );
  };

  const initNodeEvent = () => {
    let graph = graphRef.current;
    graph.on('node:click', evt => {
      // console.log('evt', evt);
      clearClickNodeState(graph)
      graph.setItemState(evt.item, 'selected', true);
    });

    graph.on('region-image-label:click', e => {
      console.log('111111evt', e);
      const nodeId = e.item.getID();
      const nodeData = graph.findById(nodeId).getModel(); // 当前模块的“状态数据”
      debugger;

      // Adding new child nodes
      const newNodes = [];
      for (let i = 0; i < 3; i++) {
        newNodes.push({
          id: `${nodeId}-child-${i}`,
          label: `Child ${i + 1}`,
          size: 100,
          type: 'region-image',
          label: '子节点',
          imgOptions: {
            size: [120, 80],
            img: branch_base,
          },
          x: nodeData.x,
          y: nodeData.y
        });
      }

      // Add nodes and edges
      graph.addItem('node', newNodes);
      newNodes.forEach(node => {
        graph.addItem('edge', {
          source: nodeId,
          target: node.id
        });
      });

      // Refresh the graph
      graph.refresh();
    });
  };

  const clearClickNodeState = (graph) => {
    const focusEdges = graph.findAllByState('node', 'selected');
    focusEdges.forEach((fedge) => {
      graph.setItemState(fedge, 'selected', false);
    });
  };

  const clearClickEdgeState = (graph) => {
    const focusEdges = graph.findAllByState('edge', 'click');
    focusEdges.forEach((fedge) => {
      graph.setItemState(fedge, 'click', false);
    });
  };

  const initEdgeEvent = () => {
    let graph = graphRef.current;
    graph.on('edge:click', evt => {
      clearClickEdgeState(graph);
      console.log('evt', evt);
      graph.setItemState(evt.item, 'click', true);
    });
    graph.on('edge:mouseenter', evt => {
      graph.setItemState(evt.item, 'hover', true);
    });
    graph.on('edge:mouseleave', evt => {
      graph.setItemState(evt.item, 'hover', false);
    });
  };

  const handleTitle = () => {
    graphRef.current.changeData(data1);
    graphRef.current.refresh();
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex'
      }}
    >
      {/* 占内容区域的百分之70% */}
      <div ref={leftDom} 
        style={{
          backgroundColor: 'black', 
          width: `${100 - leftWidthNum}%` 
        }}>
        <div ref={graphDom}>
          <div style={{ position: 'absolute' }}>
            <Link to="/">
              <Button type="dashed">回到首页</Button>
            </Link>
            <Button type="dashed" onClick={handleTitle}>切换标题</Button>
            <Button type="dashed" onClick={() => {setLeftWidthNum(15)}}>缩放右侧</Button>
            <Button type="dashed" onClick={() => {setLeftWidthNum(30)}}>扩展右侧</Button>
            <Button type="dashed" onClick={() => {graphRef.current.showItem('node2')}}>显示某个节点</Button>
          </div>
        </div>
   
      </div>
      {/* 占内容区域的百分之30% */}
      <div
        style={{
          width: `${leftWidthNum}%`, 
          height: '100%',
          // backgroundColor: 'red',
          // transition: 'width 0.5s',
          // transformOrigin: '100% 100%',
          // transformOrigin: '0 100%',
        }}>
        111233311223
      </div>
    </div>
  );
};

export default Tutorial;
