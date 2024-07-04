
import React, { useEffect } from 'react'
import G6 from '@antv/g6';
import { useWindowSize } from 'react-use';
import branch_base from '@/assets/branch_base.png'
const data = {
  nodes: [
    { id: 'node0', size: [600, 10], img: branch_base, type:'rect'},
  ],
  // edges: [
  //   { source: 'node0', target: 'node1' },
  // ],
};

const Tutorital = () => {
  const ref = React.useRef(null)
  let graph = null
  const { width, height } = useWindowSize();

  useEffect(() => {
    if(!graph) {
      // 注册graph节点
      initNode()
      // 实例化 Graph
      graph = new G6.Graph({
        container: ref.current,
        width,
        height,
        // 
        modes: {
          default: ['drag-canvas', 'zoom-canvas']
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
          type: 'line'
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
    }
    
    graph.data(data)
    graph.render()

  }, [])


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
        // draw(cfg, group) {
        //   return group.addShape('image', {
            
        //   })
        // },
        /**
         * 绘制后的附加操作，默认没有任何操作
         * @param  {Object} cfg 节点的配置项
         * @param  {G.Group} group 图形分组，节点中图形对象的容器
         */
        afterDraw(cfg, group) {
          // const group = node.getContainer(); // 获取容器
          const size = cfg.size;
          const width = size[0] - 14;
          const height = size[1] - 14;
          const image = group.addShape('image', {
            attrs: {
              x: - width / 2,
              y: - height / 2,
              width: width,
              height: height,
              img: cfg.img
            },
            // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
            name: 'image-shape'
          });
        },
        /**
         * 更新节点，包含文本
         * @override
         * @param  {Object} cfg 节点的配置项
         * @param  {Node} node 节点
         */
        // update(cfg, node) {},
        /**
         * 更新节点后的操作，一般同 afterDraw 配合使用
         * @override
         * @param  {Object} cfg 节点的配置项
         * @param  {Node} node 节点
         */
        // afterUpdate(cfg, node) {},
        /**
         * 响应节点的状态变化。
         * 在需要使用动画来响应状态变化时需要被复写，其他样式的响应参见下文提及的 [配置状态样式] 文档
         * @param  {String} name 状态名称
         * @param  {Object} value 状态值
         * @param  {Node} node 节点
         */
        // setState(name, value, node) {},
        /**
         * 获取锚点（相关边的连入点）
         * @param  {Object} cfg 节点的配置项
         * @return {Array|null} 锚点（相关边的连入点）的数组,如果为 null，则没有控制点
         */
        // getAnchorPoints(cfg) {},
      },
      // 继承内置节点类型的名字，例如基类 'single-node'，或 'circle', 'rect' 等
      // 当不指定该参数则代表不继承任何内置节点类型
      'rect',
    );
  }

  return <div ref={ref} style={{ width, height, backgroundColor: 'black' }}></div>
}

export default Tutorital
