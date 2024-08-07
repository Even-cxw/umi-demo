
import React, { useEffect } from 'react'
import G6 from '@antv/g6';
import { useWindowSize } from 'react-use';

const data = 
  { id: 'node0', label: '0', "children": [
    { id: 'node1', "children": [{ id: 'node11'},]},
    { id: 'node2'},
    { id: 'node3'},
    { id: 'node4'},
  ]
}

const Tutorital = () => {
  const ref = React.useRef(null)
  let graph = null
  const { width, height } = useWindowSize();

  useEffect(() => {
    if(!graph) {
      // 实例化 Minimap

      // G6 - 小地图插件
      // const minimap = new G6.Minimap()

      // 实例化 Graph
      graph = new G6.TreeGraph({
        container: ref.current,
        width,
        height,
        modes: {
          default: [
            {
              type: 'collapse-expand',
              onChange: function onChange(item, collapsed) {
                const data = item.getModel();
                data.collapsed = collapsed;
                return true;
              },
            },
            'drag-canvas',
            'zoom-canvas',
          ],
        },
        defaultNode: {
          size: 26,
          type: 'rect',
          anchorPoints: [
            [0, 0.5],
            [1, 0.5],
          ],
        },
        defaultEdge: {
          type: 'cubic-horizontal',
        },
        layout: {
          type: 'compactBox',
          direction: 'LR',
          getId: function getId(d) {
            return d.id;
          },
          getHeight: function getHeight() {
            return 16;
          },
          getWidth: function getWidth() {
            return 16;
          },
          getVGap: function getVGap() {
            return 10;
          },
          getHGap: function getHGap() {
            return 100;
          },
        },
      });
    }
    
    // 初始化数据
    graph.data(data)
    // 渲染数据
    graph.render()
    graph.fitView();

  }, [])

  // 修改画布颜色
  return <div ref={ref} style={{ width, height, backgroundColor: 'black' }}></div>
}

export default Tutorital
