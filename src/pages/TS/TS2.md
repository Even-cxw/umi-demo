
# 学习既要 - 泛型

- 如何定义泛形？
1. 如何在数组、对象中定义泛形？
2. 如何在函数中定义泛形？
3. 如何约束范型？
4. 泛型关键字有哪些？

## 定义个复杂数组类型

> 需求
1. 数组中包括复杂对象
2. 将数组传递给fn函数，并返回新的组合数组

```ts
interface INodesOBj {
  id: string|number,
  label?: string,
  visible?: boolean,
  [key:string]: any
}

interface IEdges {
  id: string|number,
  source: string|number,
  target: string|number,
  visible?: boolean,
  [key: string]: any,
}

interface IGraphData {
  nodes:INodesOBj[],
  edges: IEdges[]
}
```

### 1. 数组对象中定义泛形

```ts
// 虽然这么写没有意义，只是训练泛形
interface INodesOBj {
  id: string|number,
  label?: string,
  visible?: boolean,
  [key:string]: any
}

interface IEdges {
  id: string|number,
  source: string|number,
  target: string|number,
  visible?: boolean,
  [key: string]: any,
}

interface IGraphData<T=INodesOBj, N=IEdges> {
  nodes: T[],
  edges: N[],
}

```

### 函数中定义泛形

```ts
const fn = <T>(data: T):T {
  return data
}
```


## 泛型关键字有哪些

1. extends : 延伸 => 必须符合某个接口
2. keyof  => 必须是某个对象类型的键的集