const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

function randTime(min, max) {//3
    return Math.round(Math.random()*(max-min)+min);
}

function randHole(holes) {//4
    const randIndex = Math.floor(Math.random() * holes.length)
    const hole = holes[randIndex]
    if (hole === lastHole){
        return randHole(holes)
    }

    lastHole = hole;
    return hole;
 
}

function peep() {//2
    const time = randTime(1000,2000)
    const hole = randHole(holes)
    hole.classList.add('up')

    setTimeout(()=>{
        hole.classList.remove('up') //시간이 지나면 두더지는 다시 들어감
        if(!timeUp){
            peep();
        }
    }, time);
}

function startGame() {//1
    scoreBoard.textContent = 0
    score = 0
    timeUp = false
    peep()

    setTimeout(() => timeUp = true, 10000) //두더지게임 진행시간
}

function bonk(e) {
    if(!e.isTrusted) return;

    this.classList.remove('up');
    score++
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));