
# ts关键字学习

## Record类型用于构建一个对象类型，其属性键和值的类型可以通过泛型参数指定。

```typescript
interface Person {
  name: string;
  age: number;
} 

const person: Person = {
  name: 'Alice',
  age: 25
};


// 类型别名
type PersonRecord = Record<string, Person>;


const personRecord: PersonRecord = {
  '123': {
    name: 'Bob',
    age: 30
  },
  '456': {
    name: 'Charlie',
    age: 35
  }
};
```

## Partial类型用于构建一个对象类型，其属性键和值的类型可以通过泛型参数指定，但是只需要部分属性。

```typescript
interface Person {
  name: string;
  age: number;  
} 

const partialPerson: Partial<Person> = {
  name: 'Alice'
};

// 类型别名
type PartialPersonRecord = Partial<Record<string, Person>>;

const partialPersonRecord: PartialPersonRecord = {
  '123': {
    name: 'Bob'
  },
  '456': {
    age: 35
  }
};
```