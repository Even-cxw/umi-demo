
import React, { useEffect } from 'react'
import G6 from '@antv/g6';
import { useWindowSize } from 'react-use';
import branch_base from '@/assets/branch_base.png'
import normal_base from '@/assets/normal_base.png'
import warning_base from '@/assets/warning_base.png'
import ping_score from '@/assets/ping_score.png'
import './index.less'
const data = {
  nodes: [
    { 
      id: 'node0', 
      imgOptions: {
        size: [120, 80], 
        img: branch_base, 
      },
      label: '互联网访问',
      type:'region-image'
    },
    // { 
    //   id: 'node1', 
    //   imgOptions: {
    //     size: [170, 180], 
    //     img: normal_base, 
    //   },
    //   label: '机构客户接入',
    //   cardOptions: {

    //   },
    //   type:'region-image'
    // },
    // { 
    //   id: 'node2', 
    //   imgOptions: {
    //     size: [120, 90], 
    //     img: warning_base, 
    //   },
    //   label: '机构客户接入',
    //   cardOptions: {

    //   },
    //   type:'region-image'
    // },
    // { 
    //   id: 'node3', 
    //   layoutType: 'center',
    //   x: 1500,
    //   y: 1500,
    //   imgOptions: {
    //     size: [200, 200], 
    //     img: ping_score, 
    //   },
    //   label: '总头',
    //   cardOptions: {

    //   },
    //   type:'region-image'
    // },
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
        renderer: 'svg', // 设置 renderer 为 'svg'
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
          type: 'line'
        },
        layout: {
          pipes: [
            {
              type: 'circular',
              radius: 800,
              center: [1500, 1500],
              nodesFilter: (node) => {
                console.log('node', node);
                return node.layoutType !== 'center' // 返回true时，表示使用此布局
              }
            }
          ]
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

        fitView: true,
        fitViewPadding: 100
      })
    }
    
    graph.data(data)
    graph.render()

  }, [])


  const createG6Dom = () => {
    return `
      <div class="G6_dom">
        <div class="item"><span>总数:</span><span>42</span></div>
        <div class="item"><span>通:</span><span>12</span></div>
        <div class="item"><span>断:</span><span style="color: red">0</span></div>
      </div>
    `
  }

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
              x: - imgOptions.size[0] / 2,
              y: - imgOptions.size[1] / 2,
              width: imgOptions.size[0],
              height: imgOptions.size[1],
              img: imgOptions.img
            },
            name: 'region-image-shape'
          });

          if (cfg.label) {
            group.addShape('text', {
              attrs: {
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

          group.addShape('dom', {
            attrs: {
              // x: 0,
              x: - imgOptions.size[0] / 2,
              y: imgOptions.size[1] / 2 + 3,
              width: cfg.imgOptions.size[0],
              height: cfg.imgOptions.size[1],
              html: createG6Dom(),
            },
            name: 'region-image-dom',
            draggable: true,
          })

          return keyShape
        },
   
      },
      // 继承内置节点类型的名字，例如基类 'single-node'，或 'circle', 'rect' 等
      // 当不指定该参数则代表不继承任何内置节点类型
      // 'rect',
    );
  }

  return <div ref={ref} style={{ width, height, backgroundColor: 'black' }}></div>
}

export default Tutorital
