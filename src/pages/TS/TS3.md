

## TypeScript 的声明文件 .d.ts

TypeScript 编译器能够自动生成声明文件 .d.ts ，但有时我们需要手动创建声明文件。

声明文件可以帮助 TypeScript 编译器更好地理解我们代码的意图，并提供更好的代码提示和错误检查。

声明文件通常以 .d.ts 结尾，并包含对模块、类、接口、类型等的声明。

下面是一个简单的声明文件示例：

```typescript
declare function greet(name: string): string;

declare namespace myLib {
  function add(a: number, b: number): number;
  class MyClass {
    constructor(name: string);
    sayHello(): void;
  }
}
```

- `declare function greet(name: string): string;`：声明了一个函数 `greet` ，接收一个字符串参数，返回一个字符串。
- `declare namespace myLib`：声明了一个命名空间 `myLib` 。
- `function add(a: number, b: number): number;`：声明了一个函数 `add` ，接收两个数字参数，返回一个数字。
- `class MyClass`：声明了一个类 `MyClass` 。
- `constructor(name: string)`：构造函数，接收一个字符串参数。
- `sayHello(): void;`：类的方法 `sayHello` ，没有参数，返回值类型为 `void`。



## TS的配置文件

- tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "jsx": "react",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "strictNullChecks": true,
    "noEmit": true,
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```


- 说明：

- "target": "es5"：编译目标为 es5
- "module": "commonjs"：模块化输出
- "jsx": "react"：使用 react 的 JSX 语法
- "strict": true：启用严格模式
- "esModuleInterop": true：允许使用 import/export 语句
- "skipLibCheck": true：跳过库的类型检查
- "forceConsistentCasingInFileNames": true：文件名大小写一致
- "noImplicitReturns": true：函数返回值必须有返回值
- "noUnusedLocals": true：未使用的局部变量报错
- "noUnusedParameters": true：未使用的参数报错
- "noFallthroughCasesInSwitch": true：switch 语句必须有 default 分支
- "strictNullChecks": true：启用严格的 null 检查
- "noEmit": true：不生成输出文件
- "baseUrl": "./"：设置根目录
- "paths": { "@/*": ["src/*"] }：设置路径别名 `@` 指向 `src` 目录 

- "include": ["src/**/*"]：指定编译的文件
- "exclude": ["node_modules", "dist"]：指定不编译的文件 `node_modules` 和 `dist`  