var list = document.getElementById('list');
var button = document.getElementById('button');
var input = document.getElementById('input');

var count = 1;

button.addEventListener('click', clickButton);//click했을때 clickButton함수가 작동

function clickButton(){
    var li = document.createElement('li');//li라는 요소를 추가하겠다.
    li.setAttribute('id','li'+count);//id속상값 추가
    li.setAttribute('class', 'list-group-item');
    li.setAttribute('style', 'background-color:  rgb(24, 66, 83); border: solid; border-color: rgb(46, 117, 145);');
    li.setAttribute('margin', '10px');

    li.innerHTML = '<span style="font-size: 20px">'+input.value+'</span>';//??넣어주겠다??float: right; display: inline-block; clear: both;
    li.innerHTML += '<button id=delete'+count+' style="color: white; background-color: rgb(46, 117, 145); width: 100px; padding: 2px; margin-left: 10px" onclick="remove('+count+')">DELETE</button>';
    li.innerHTML += '<button id=clear'+count+' style="color: white; background-color: rgb(46, 117, 145); width: 100px; padding: 2px; margin-left: 10px" onclick="finish('+count+')">CLEAR</button>';


    count = count+1;//count++;과 같은 의미
    list.appendChild(li);//list변수로 받아온 ul리스트에 자식태그를 추가하겠다.
    input.value = '';
}

function remove(count){
    var li = document.getElementById('li'+count);//li라는 요소를 추가하겠다.
    list.removeChild(li);//list변수로 밴처음에 받아온 객체에서 자식태그 li를 삭제
}

function finish(count){
    var li = document.getElementById('li'+count);//li라는 요소를 추가하겠다.
    var deleteButton = document.getElementById('delete'+count);
    var clearButton = document.getElementById('clear'+count);
    li.removeAttribute('style');
    li.innerHTML += ' <span style="color: yellow;"> CLEAR! </span> ';
    li.setAttribute('style', 'background-color:  rgb(24, 66, 83); border: thick dotted yellow;');
    li.removeChild(deleteButton);
    li.removeChlid(clearButton);
    //따흐흑 왜 작동이 안되지...
}