import React, { useEffect, useRef } from 'react';
import G6 from '@antv/g6';
import { useWindowSize } from 'react-use';
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

const Tutorial = () => {
  const ref = useRef(null);
  const { width, height } = useWindowSize();
  let graphRef = useRef(null);

  useEffect(() => {
    initGraph();
  }, []);

  const initGraph = () => {
    if (!graphRef.current) {
      initNode();
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

    graph.on('region-image-label:click', evt => {
      console.log('111111evt', evt);
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
    <div ref={ref} style={{ width, height, backgroundColor: 'black' }}>
      <div style={{ position: 'absolute' }}>
        <Link to="/">
          <Button type="dashed">回到首页</Button>
        </Link>
        <Button type="dashed" onClick={handleTitle}>切换标题</Button>
      </div>
    </div>
  );
};

export default Tutorial;
