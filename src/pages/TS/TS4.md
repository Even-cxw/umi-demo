
# 特殊ts用法


## TS中Promise的使用

1. Promise是内置的泛型接口， Promise<T> 其中T表示一个异步操作的最终结果的类型。

```typescript
// 定义一个Promise接口
interface Promise<T> {
  then<TResult1 = T, TResult2 = never>(
    onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
    onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null 
  ): Promise<TResult1 | TResult2>;
  catch<TResult = never>(
    onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
  ): Promise<T | TResult>;  
}
```


## useState泛型函数如何定义的

```typescript
// 方法一 函数声明
function useState<S>(
  initialState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>] {
  // ...
}

// 方法二 函数表达式
const useState = <S>(): [S, Dispatch<SetStateAction<S>>] {

}
```

## useRef泛型函数如何定义的

```typescript
const timerRef = useRef<number | null>(null);
timerRef.current = setTimeout(() => {
  console.log('timeout');
}, 1000);

const ref = useRef<HTMLDivElement>(null);

```