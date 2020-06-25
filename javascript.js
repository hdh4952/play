var btnCnt = 0;
var soundCnt = 0;
var score = 0;

function entrance() {
    document.querySelector('#status').innerHTML = "알림 > 야생의 이우영이 나타났다!!!<br>";
    document.querySelector('#Image').style.border = "5px black solid";
}
function bdr() {
    document.querySelector('#status').innerHTML = "알림 >";
    document.querySelector('#Image').style.border = "5px white solid";
}
function btnalert() {
    document.querySelector('#btnAlert').innerHTML = `
    이우영에게 고추를 주시겠습니까?<br>
    <button onclick="ale()">예</button> <button onclick="ale2()">아니오</button>
    `
}
function ale() {
    document.write(`
    <h1>으엌!!</h1><br>
    <h3>SCORE: ${score}</h3><br>
    <button onclick="back()">돌아가기</button>
    `);
}
function ale2() {
    document.querySelector('#status').innerHTML += "잘못된 선택입니다.<br>"
    btnCnt++;
    if(btnCnt === 15){
        document.querySelector('#status').innerHTML = "알림 > ";
        btnCnt = 0;
    }
    score += 5;
}
function back() {
    location.href="index.html";
}
function sound() {
    document.querySelector('#status').innerHTML += "니가! 니가!<br>"; 
    score += 10;
    soundCnt ++;
    if(soundCnt === 15){
        document.querySelector('#status').innerHTML = "알림 > ";
        soundCnt = 0;
    }
}
