var player = {
    top: 620,
    left: 450
}

var enemy = [
    {top: 50, left: 200},
    {top: 100, left: 250},
    {top: 50, left: 300},
    {top: 100, left: 350}
]

var missile = [];

function drawPlayer(){
    output = "<div class='player' style = 'top:"+player.top+"px; left:"+player.left+"px';></div>";
    document.getElementById("players").innerHTML = output;
}
drawPlayer();

function drawEnemy(){
    output = "";
    for(var i = 0;i < enemy.length;i++){
        output +="<div class='enemy' style = 'top:"+enemy[i].top+"px; left:"+enemy[i].left+"px;'></div>";
    }
    document.getElementById("enemies").innerHTML = output;
}

function drawMissile(){
    output = "";
    for(var i = 0;i < missile.length;i++){
        output +="<div class='missile' style = 'top:"+missile[i].top+"px; left:"+missile[i].left+"px;'></div>";
    }
    document.getElementById("missiles").innerHTML = output;
}

function moveEnemy(){
    for(var i = 0;i < enemy.length;i++){
        enemy[i].top = enemy[i].top + 5;
    }
}

function moveMissile(){
    for(var i = 0;i < missile.length;i++){
        missile[i].top = missile[i].top - 10;
    }
}

document.onkeydown = function(e){
    if(e.keyCode == 37){ // LEFT
        console.log(player.left);
        if(player.left > 0){
            player.left -= 10;
            console.log(player.left);
        }
    }
    if(e.keyCode == 38){ // UP
        console.log(player.top);
        if(player.top > 500){
            player.top -= 10;
            console.log(player.top);
        }
    }
    if(e.keyCode == 39){ // RIGHT
        console.log(player.left);
        if(player.left < 840){
        player.left += 10;
        console.log(player.left);
        }
    }
    if(e.keyCode == 40){ // DOWN
        console.log(player.top);
        if(player.top < 620){
            player.top += 10;
            console.log(player.top);
        }
    }
    if(e.keyCode == 32){ // SHOOT
        missile.push( {left: (player.left + 33), top: (player.top - 6)} );
        drawMissile();
    }
    drawPlayer();
}

function enemyLoop(){

    moveEnemy();
    drawEnemy();

    setTimeout(enemyLoop, 100);// 1000 ms = 1s
}
enemyLoop();

function playerLoop(){

    drawPlayer();

    moveMissile();
    drawMissile();

    setTimeout(playerLoop, 10);
}
playerLoop();