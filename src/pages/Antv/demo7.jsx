
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
    { 
      id: 'node1', 
      imgOptions: {
        size: [170, 180], 
        img: normal_base, 
      },
      label: '机构客户接入',
      cardOptions: {

      },
      type:'region-image'
    },
    { 
      id: 'node2', 
      imgOptions: {
        size: [120, 90], 
        img: warning_base, 
      },
      label: '机构客户接入',
      cardOptions: {

      },
      type:'region-image'
    },
    { 
      id: 'node3', 
      imgOptions: {
        size: [120, 90], 
        img: warning_base, 
      },
      label: '机构客户',
      cardOptions: {

      },
      type:'region-image'
    },
    { 
      id: 'node4', 
      imgOptions: {
        size: [120, 90], 
        img: warning_base, 
      },
      label: '机构客户',
      cardOptions: {

      },
      type:'region-image'
    },
    { 
      id: 'center1', 
      layoutType: 'center',
      x: 1200,
      y: 1200,
      imgOptions: {
        size: [200, 200], 
        img: ping_score, 
      },
      label: '总头',
      cardOptions: {

      },
      type:'region-image'
    },
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
              center: [1200, 1200],
              nodesFilter: (node) => {
                // console.log('node', node);
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

    // 添加hover事件
    graph.on('node:mouseenter', evt => {
      graph.setItemState(evt.item, 'hover', true)
    })
    graph.on('node:mouseleave', evt => {
      graph.setItemState(evt.item, 'hover', false)
    })

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

        afterDraw(cfg, group) {
          // 获取该节点上的第一个图形
          const shape = group.get('children')[0];
          // 该图形的动画 => 中心区域天假放大缩小动画
          if(cfg.layoutType === 'center') {
            shape.animate(
              (ratio) => {
                const scale = ratio <= 0.5 ? 1 + ratio : 2 - ratio;
                return {
                  matrix: [
                    scale, 0, 0,
                    0, scale, 0,
                    0, 0, 1,
                  ],
                };
              },
              {
                // 动画重复
                repeat: true,
                duration: 2000,
                easing: 'easeCubic',
              },
            ); // 一次动画持续的时长为 3000，动画效果为 'easeCubic'
          }
        },

        setState(name, value, item) {
          console.log('name, value, item', name, value, item)
          const group = item.getContainer();
          const shape = group.get('children')[0]; // 获取图片 shape
          const imgOptions = item.getModel().imgOptions;

          if (name === 'hover' && value) {
            // 鼠标悬浮时放大
            shape.animate(
              {
                width: imgOptions.size[0] * 1.4,
                height: imgOptions.size[1] * 1.4,
                x: -imgOptions.size[0] * 1.4 / 2,
                y: -imgOptions.size[1] * 1.4 / 2,
              },
              {
                duration: 200,
                easing: 'easeCubic',
              }
            );
          } else if (name === 'hover' && !value) {
            // 鼠标移出时恢复原大小
            shape.animate(
              {
                width: imgOptions.size[0],
                height: imgOptions.size[1],
                x: -imgOptions.size[0] / 2,
                y: -imgOptions.size[1] / 2,
              },
              {
                duration: 200,
                easing: 'easeCubic',
              }
            );
          }
        },
      },
    );
  }

  return <div ref={ref} style={{ width, height, backgroundColor: 'black' }}></div>
}

export default Tutorital
