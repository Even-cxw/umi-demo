
# 学习既要 - 函数

- 定义函数接口
1. 定义函数有几种方法 - js？
2. 如何基本函数接口？



## 1. 定义函数的俩中方法

### 函数声明

```js
function fn () {

}
```

### 函数表达式

```js
const fn = () => {

}
```



## 基本函数接口
- 如下代码 => 有报错
*报错原因：*
1. 函数接口一般用`函数表达式`定义
2. 函数声明定义 => function后不能跟接口 `所以报错`
```ts
interface Ifn {
  (v:number, s:number): number
}

const fn:Ifn = (a, b) => {
  return a + b
}


// 报错
function fn2:Ifn(a,b) {
  return a + b
}

```
- 函数式声明正确写法如下
```ts
function fn2(a: number, b: number): number {
  return a + b;
}
```