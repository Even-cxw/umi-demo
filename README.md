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



### demo6 [插件](https://g6.antv.antgroup.com/api/plugins#edge-bundling) 


---

## render渲染模式

## Canvas 渲染模式
### 优点
1. 性能高：Canvas 渲染在处理大量节点和边时性能较好，因为它直接在画布上绘制图形，减少了 DOM 操作。
2. 适用于动态变化场景：在需要频繁更新和重绘图形的场景中，Canvas 的性能优势更加明显。
3. 较小的内存占用：Canvas 的内存占用通常比 SVG 更小，适合于节点和边数量较多的情况。
### 缺点
1. 交互复杂：Canvas 渲染的元素不在 DOM 树中，不能直接使用 CSS 和 DOM 操作进行交互，需要借助 G6 的事件和方法。
2. 精细控制难：在精细控制图形元素的样式和位置时，Canvas 的操作相对复杂。
## SVG 渲染模式
### 优点
1. 可访问性好：SVG 渲染的图形元素是 DOM 元素，可以直接使用 CSS 和 DOM 操作，便于进行样式修改和交互处理。
2. 精细控制方便：SVG 支持矢量图形，可以精确控制图形的显示效果，适用于需要高精度的图形展示。
3. 调试方便：SVG 渲染的图形元素可以在浏览器的开发者工具中直接查看和调试，方便定位问题。
### 缺点
1. 性能较差：在处理大量节点和边时，SVG 渲染的性能可能不如 Canvas，尤其是在节点和边数量较多或频繁更新时。
2. 内存占用高：由于每个图形元素都是一个 DOM 节点，内存占用相对较高，不适合处理非常大的图形。
### 选择建议
1. 节点和边数量较少：如果图形中节点和边的数量较少，可以选择 SVG 渲染，以便更方便地控制样式和交互。
2. 性能需求高：如果需要处理大量节点和边，或频繁更新图形，建议选择 Canvas 渲染，以提高性能。
3. 精细控制需求：如果需要对图形元素进行精细控制和复杂交互，可以选择 SVG 渲染。
4. 开发调试需求：如果希望更方便地调试图形元素，SVG 渲染会更有优势。
## 总的来说
 - Canvas 更适合大规模、高性能的场景，而 SVG 更适合需要精细控制和复杂交互的场景。可以根据具体需求选择合适的渲染模式。