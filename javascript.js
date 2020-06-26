var btnCnt = 0;
var soundCnt = 0;
var score = 0;
var isImage = true;
var havePepper = 0;

function entrance() {
    document.querySelector('#status').innerHTML = "알림 > 야생의 이우영이 나타났다!!!<br>";
    document.querySelector('#Image').style.border = "5px black solid";
}
function bdr() {
    document.querySelector('#status').innerHTML = "알림 >";
    document.querySelector('#Image').style.border = "5px white solid";
    btnCnt = 0;
    soundCnt = 0;
}
function btnalert() {
    document.querySelector('#btnAlert').innerHTML = `
    이우영에게 고추를 주시겠습니까?<br>
    <button onclick="ale()">예</button> <button onclick="ale2()">아니오</button>
    `
}
function ale() {
    if(havePepper === 0) {
        document.querySelector('#status').innerHTML += `
        <div style="color: red;">보유한 고추가 없습니다!</div>
        `
    }else {
        document.write(`
        <h1>으엌!!</h1><br>
        <h3>SCORE: ${score}</h3><br>
        <button onclick="back()">돌아가기</button>
        `);
    }
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
function ImageClick() {
    document.getElementById('Inventory').style.border ="5px solid black";
    if(isImage === true){
        document.getElementById('Image').src = "Character3.gif";
        isImage = false;
    }else if(isImage === false){
        document.getElementById('Image').src = "Character1.gif";
        isImage = true;
    }
    var jbRandom = Math.floor(Math.random()*10 + 1);
    if(jbRandom === 5){
        document.querySelector('#status').innerHTML += `<div style="color: red">고추를 얻었다!<br></div>`;
        havePepper++;
        score += 100;
        Inven();        
    }else{
        document.querySelector('#status').innerHTML += "니가! 니가!<br>";
        score += 10;
    } 
    soundCnt ++;
    if(soundCnt === 15){
        document.querySelector('#status').innerHTML = "알림 > ";
        soundCnt = 0;
    }
}
function Inven() {
    document.getElementById('Inventory').innerText = `현재 보유한 고추 : ${havePepper}개`
    document.getElementById('Inventory').style.border ="10px solid red";
}