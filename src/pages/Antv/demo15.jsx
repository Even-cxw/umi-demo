import React, { useEffect, useRef } from 'react';
import G6 from '@antv/g6';
import { useWindowSize } from 'react-use';

const data = {
  nodes: [
    { id: 'node0', size: 100 },
    { id: 'node1', size: 100 },
  ],
  edges: [
    { source: 'node0', target: 'node1', type: 'region-edge2', label: '张江高科' },
    { source: 'node0', target: 'node1', type: 'region-edge2', label: '张江高科1' },
    { source: 'node0', target: 'node1', type: 'region-edge1', label: '张江高科2' },
    { source: 'node0', target: 'node1', type: 'region-edge1', label: '张江高科3' },
    { source: 'node0', target: 'node1', type: 'region-edge1', label: '张江高科4' },
    { source: 'node0', target: 'node1', type: 'region-edge2', label: '张江高科5' },
    { source: 'node0', target: 'node1', type: 'region-edge2', label: 1 },
    { source: 'node0', target: 'node1', type: 'region-edge2', label: 1 },
    { source: 'node0', target: 'node1', type: 'region-edge2', label: 1 },
    { source: 'node0', target: 'node1', type: 'region-edge2', label: 1 },
    { source: 'node0', target: 'node1', type: 'region-edge2', label: 1 },
    { source: 'node0', target: 'node1', type: 'region-edge2', label: 1 },
    { source: 'node0', target: 'node1', type: 'region-edge2', label: 1 },
    { source: 'node0', target: 'node1', type: 'region-edge2', label: 1 },
    { source: 'node0', target: 'node1', type: 'region-edge2', label: 1 },
    { source: 'node0', target: 'node1', type: 'region-edge2', label: 1 },
    { source: 'node0', target: 'node1', type: 'region-edge2', label: 1 },
  ],
};

const Tutorial = () => {
  const ref = useRef(null);
  const { width, height } = useWindowSize();
  let graph = null;

  useEffect(() => {
    G6.Util.processParallelEdges(data.edges);
    initEdge1();
    initEdge2();
    initGraph();
  }, []);

  const initEdge1 = () => {
    G6.registerEdge('region-edge1', {
      afterDraw(cfg, group) {
        const shape = group.get('children')[0];
        const startPoint = shape.getPoint(0);
        const circle = group.addShape('circle', {
          attrs: {
            x: startPoint.x,
            y: startPoint.y,
            fill: 'red',
            r: 3,
          },
          name: 'circle-shape',
        });
        circle.animate(
          (ratio) => {
            const tmpPoint = shape.getPoint(ratio);
            return {
              x: tmpPoint.x,
              y: tmpPoint.y,
            };
          },
          {
            repeat: true,
            duration: 3000,
          },
        );
      },
    }, 'quadratic');
  };

  const initEdge2 = () => {
    const lineDash = [4, 2, 1, 2];
    G6.registerEdge('region-edge2', {
      afterDraw(cfg, group) {
        const shape = group.get('children')[0];
        let index = 0;
        shape.animate(
          () => {
            index++;
            if (index > 9) {
              index = 0;
            }
            return {
              lineDash,
              lineDashOffset: -index,
            };
          },
          {
            repeat: true,
            duration: 3000,
          },
        );
      },
    }, 'quadratic');
  };

  const initGraph = () => {
    if (!graph) {
      graph = new G6.Graph({
        container: ref.current,
        width,
        height,
        linkCenter: true,
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
            lineWidth: 3
          }
        },
        fitView: true
      });
      graph.data(data);
      graph.render();
    }
  };

  return <div ref={ref} style={{ width, height, backgroundColor: 'black' }}></div>;
};

export default Tutorial;