@Author: Even
@Time: 2024-06-22


** 页面路由 **
/docs 



## G6

1. [内置节点type类型](https://g6.antv.antgroup.com/manual/middle/elements/nodes/default-node)
- circle
- rect 
- ellipse
- diamond
- triangle
- sta
- image
- modelRect
- donut



### 布局

#### demo1 一般图 
```js
graph = new G6.Graph()
```

#### demo2 紧凑树布局
```js
graph = new G6.TreeGraph()
```

### demo3 自定义交互事件mode（demo3）
```js
  graph.setMode(type);
```


### demo4 [G6事件](https://g6.antv.antgroup.com/manual/middle/states/bind-event) 
1. evt.item 被点击的节点 item
2. evt.target 被点击的节点内部的具体图形
3. evt.target.get（'name'）用 name 区分是什么图形，比如文本图形、合并/展开 icon 图形等
```js
graph.on（'node:click'，evt =>{});
```


### demo5 [layout布局](https://g6.antv.antgroup.com/manual/middle/layout/graph-layout)

- 流水线子图布局 `layout.pipes = []`
1. 根据字段信息设置不同的布局格式


### demo6 [插件](https://g6.antv.antgroup.com/api/plugins#edge-bundling) 

- 自定义节点

```js
    G6.registerNode(
      'nodeName',
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
        draw(cfg, group) {},
        /**
         * 绘制后的附加操作，默认没有任何操作
         * @param  {Object} cfg 节点的配置项
         * @param  {G.Group} group 图形分组，节点中图形对象的容器
         */
        afterDraw(cfg, group) {},
        /**
         * 更新节点，包含文本
         * @override
         * @param  {Object} cfg 节点的配置项
         * @param  {Node} node 节点
         */
        update(cfg, node) {},
        /**
         * 更新节点后的操作，一般同 afterDraw 配合使用
         * @override
         * @param  {Object} cfg 节点的配置项
         * @param  {Node} node 节点
         */
        afterUpdate(cfg, node) {},
        /**
         * 响应节点的状态变化。
         * 在需要使用动画来响应状态变化时需要被复写，其他样式的响应参见下文提及的 [配置状态样式] 文档
         * @param  {String} name 状态名称
         * @param  {Object} value 状态值
         * @param  {Node} node 节点
         */
        setState(name, value, node) {},
        /**
         * 获取锚点（相关边的连入点）
         * @param  {Object} cfg 节点的配置项
         * @return {Array|null} 锚点（相关边的连入点）的数组,如果为 null，则没有控制点
         */
        getAnchorPoints(cfg) {},
      },
      // 继承内置节点类型的名字，例如基类 'single-node'，或 'circle', 'rect' 等
      // 当不指定该参数则代表不继承任何内置节点类型
      extendedNodeType,
    );
```