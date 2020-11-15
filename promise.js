//DSC 오프라인 모임 ES6문법 공부 때 코드
//순차적으로 1,2가 출력.
new Promise((resolve, reject) => {
    console.log(1)
    resolve()
}).then(() => {
    console.log(2)
})

//어씽크어웨잇
async function log(){
    await console.log(1)
    await console.log(2)
}

//settimeout 1 실행중에 2가 실행됨. 2다음 1이 출력.
function log(){
    setTimeout(()=> {
        console.log(1)
    }, 1000)
    console.log(2)
}
//위 코드를 이렇게 고치면 1다음 2가 실행됨.
async function log(){
    await setTimeout(()=> {
        console.log(1)
    }, 1000)
    await console.log(2)
}
