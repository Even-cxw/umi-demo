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

#### 一般图 （demo1）
```js
graph = new G6.Graph()
```

#### 紧凑树布局（demo2）
```js
graph = new G6.TreeGraph()
```

### 自定义交互事件mode（demo3）
```js
  graph.setMode(type);
```


### [G6事件](https://g6.antv.antgroup.com/manual/middle/states/bind-event) (demo4)
1. evt.item 被点击的节点 item
2. evt.target 被点击的节点内部的具体图形
3. evt.target.get（'name'）用 name 区分是什么图形，比如文本图形、合并/展开 icon 图形等
```js
graph.on（'node:click'，evt =>{});
```


### [layout布局](https://g6.antv.antgroup.com/manual/middle/layout/graph-layout)

- 流水线子图布局 `layout.pipes = []`
1. 根据字段信息设置不同的布局格式


### [插件](https://g6.antv.antgroup.com/api/plugins#edge-bundling) (demo6)
