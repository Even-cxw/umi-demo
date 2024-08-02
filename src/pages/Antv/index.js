import React, { useEffect, useRef } from 'react';
import G6 from '@antv/g6';

const GraphDemo = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Create a new graph instance
    const graph = new G6.Graph({
      container: containerRef.current,
      width: containerRef.current.clientWidth,
      height: containerRef.current.clientHeight,
      modes: {
        default: ['drag-node']
      },
      layout: {
        type: 'grid',
        rows: 1
      },
      defaultNode: {
        size: 50,
        style: {
          fill: '#9EC9FF',
          stroke: '#5B8FF9'
        }
      },
      defaultEdge: {
        style: {
          stroke: '#e2e2e2'
        }
      }
    });

    // Define the initial data
    const data = {
      nodes: [
        { id: 'node1', label: 'Node 1' },
        { id: 'node2', label: 'Node 2' }
      ],
      edges: [
        { source: 'node1', target: 'node2' }
      ]
    };

    // Load the data into the graph
    graph.data(data);
    graph.render();

    // Register a custom node
    G6.registerNode('custom-node', {
      draw(cfg, group) {
        const size = cfg.size || [50, 50];
        const [width, height] = size;
        const node = group.addShape('rect', {
          attrs: {
            x: -width / 2,
            y: -height / 2,
            width,
            height,
            fill: cfg.style.fill,
            stroke: cfg.style.stroke
          },
          name: 'rect-shape'
        });
        group.addShape('text', {
          attrs: {
            text: cfg.label,
            x: 0,
            y: 0,
            textAlign: 'center',
            textBaseline: 'middle',
            fill: '#fff'
          },
          name: 'text-shape'
        });
        return node;
      }
    }, 'rect');

    // Event listener for node click
    graph.on('node:click', (e) => {
      const nodeId = e.item.getID();
      const nodeData = graph.findById(nodeId).getModel();
      debugger;
      // Adding new child nodes
      const newNodes = [];
      for (let i = 0; i < 3; i++) {
        newNodes.push({
          id: `${nodeId}-child-${i}`,
          label: `Child ${i + 1}`,
          x: nodeData.x + Math.random() * 200 - 100,
          y: nodeData.y + Math.random() * 200 - 100
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

    // Cleanup on component unmount
    return () => {
      graph.destroy();
    };
  }, []);

  return <div ref={containerRef} style={{ width: '800px', height: '600px' }} />;
};

export default GraphDemo;
