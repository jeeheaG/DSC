//console.log로 콘솔창에 출력해 실행 확인해볼 수 있음.
//1)비구조화 할당 destructing
const user = {
    info: {
        name: 'jiyeon',
        age: 24,
        gender: 'female'
    }
}

//es5
const name = user.info.name
const age = user.info.age
const gender = user.info.gender

//es6
const {name, age,gender} = user.info

//2)객체 초기자 object initialize
const age = 20
const name = '지연'
const gender = 'female'

//es5
var datas = {
    name: name,
    age: age,
    gender: gender
}

//es6
var datas = {
    name,
    age,
    gender
}

//3)Template literals
//es5
introduce = 'my name is'+name+'. I am' +age+'years old'
//es6
introduce = `my name is ${name}. I am ${age} years old`
console.log(introduce)

//Callback => Promise ->
//콜백은 다른 함수가 실행을 끝낸 뒤 실행되는 함수이다. 비동기