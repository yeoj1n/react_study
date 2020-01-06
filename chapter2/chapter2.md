## 2.2 객체와 배열의 사용성 개선
### 2.2.2 객체와 배열을 간편하게 생성하고 수정하기
* 단축 속성명 : 객체 리터럴 코드를 간편하게 작성할 수 있다.
```
ex1)
function makePerson(age, name) {
    return {age, name}; // == return {age: age, name : name};
}

ex2)
const name = 'mike';
const age = 20;
console.log({name, age}); // {name: 'mike', age: 20}
```
* 계산된 속성명 : 객체의 속성명을 동적으로 결정하기 위해 나온 문법
```
ex1)
// 계산된 속성명 사용 X
function makeObject(key, value) {
    const obj = {};
    obj[key] = value;
    return obj;
}

// 계산된 속성명 사용 O
function makeObject(key, value) {
    return { [key] : value};
}
```

### 2.2.2 객체와 배열의 속성값을 간편하게 가져오기
* 전개 연산자 : 배열, 객체의 모든 속성을 풀어놓을 때 사용하는 문법

