$(function(){
var gameField = new Array();
var board = document.getElementById("game-table");
var currentCol;
var currentRow;
var currentPlayer;
var id = 1;
var endScreen = $(".endScreen")
var button = $(".button5")
$(button).hide();
var result = $(".result")

var sound = document.createElement("audio");
sound.src = "madron.mp3"
sound.volume = 0.7;

var happy = document.createElement("audio");
happy.src = "happyron.mov"
happy.volume = 0.7;


var obj = document.createElement("audio");
obj.src = "parkstheme.mp3"
obj.volume = 0.7;
// obj.autoPlay = true;
// obj.preLoad = true;
// obj.controls = true;


// var audio = new Audio('parkstheme.mp3')
$(".startPage").click(function(){
  obj.play();
})


// var play = document.getElementsByClassName("button3")
//  play = audio;
// function playSound(){
//   var sound = document.getElementsByClassName("")
// }
// var startPage = document.getElementsByClassName('startPage')
//
// function(playSound){
//   startPage.innerHTML
//   audio.play();
// }

// var soundarea = document.getElementsByClassName("startPage")
// function playAudio(){
//   soundarea == theme
//   soundarea.play()
// }
// var theme = new Audio('parkstheme.mp3');


var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");


newgame();

function newgame(){
  prepareField();
  placeDisc(Math.floor(Math.random()*2)+1);

}

function checkForVictory(row,col){
  if(getAdj(row,col,0,1)+getAdj(row,col,0,-1) > 2){
    return true;
  } else {
    if(getAdj(row,col,1,0) > 2){
      return true;
    } else {
      if(getAdj(row,col,-1,1)+getAdj(row,col,1,-1) > 2){
        return true;
      } else {
        if(getAdj(row,col,1,1)+getAdj(row,col,-1,-1) > 2){
          return true;
        } else {
          return false;
        }
      }
    }
  }
}

function getAdj(row,col,row_inc,col_inc){
  if(cellVal(row,col) == cellVal(row+row_inc,col+col_inc)){
    return 1+getAdj(row+row_inc,col+col_inc,row_inc,col_inc);
  } else {
    return 0;
  }
}

function cellVal(row,col){
  if(gameField[row] == undefined || gameField[row][col] == undefined){
    return -1;
  } else {
    return gameField[row][col];
  }
}

function firstFreeRow(col,player){
  for(var i = 0; i<6; i++){
    if(gameField[i][col]!=0){
      break;
    }
  }
  gameField[i-1][col] = player;
  return i-1;
}

function possibleColumns(){
  var moves_array = new Array();
  for(var i=0; i<7; i++){
    if(gameField[0][i] == 0){
      moves_array.push(i);
    }
  }
  return moves_array;
}

function think(){
  var possibleMoves = possibleColumns();
  var aiMoves = new Array();
  var blocked;
  var bestBlocked = 0;


  for(var i=0; i<possibleMoves.length; i++){
    for(var j=0; j<6; j++){
      if(gameField[j][possibleMoves[i]] != 0){
        break;
      }
    }

    gameField[j-1][possibleMoves[i]] = 1;
    blocked = getAdj(j-1,possibleMoves[i],0,1)+getAdj(j-1,possibleMoves[i],0,-1);
    blocked = Math.max(blocked,getAdj(j-1,possibleMoves[i],1,0));
    blocked = Math.max(blocked,getAdj(j-1,possibleMoves[i],-1,1));
    blocked = Math.max(blocked,getAdj(j-1,possibleMoves[i],1,1)+getAdj(j-1, possibleMoves[i],-1,-1));

    if(blocked >= bestBlocked){
      if(blocked>bestBlocked){
        bestBlocked = blocked;
        aiMoves = new Array();
      }
      aiMoves.push(possibleMoves[i]);
    }
    gameField[j-1][possibleMoves[i]] = 0;
  }

  return aiMoves;
}

function Disc(player){
  this.player = player;
  this.color = player == 1 ? 'red' : 'yellow';
  this.id = id.toString();
  id++;

  this.addToScene = function(){
    board.innerHTML += '<div id="d'+this.id+'" class="disc '+this.color+'"></div>';
    if(currentPlayer==2){
      //computer move
      var possibleMoves = think();
      var cpuMove = Math.floor( Math.random() * possibleMoves.length);
      currentCol = possibleMoves[cpuMove];
      document.getElementById('d'+this.id).style.left = (14+60*currentCol)+"px";
      dropDisc(this.id,currentPlayer);
    }
  }

  var $this = this;
  document.onmousemove = function(evt){
    if(currentPlayer == 1){
    currentCol = Math.floor((evt.clientX - board.offsetLeft)/60);
    if(currentCol<0){currentCol=0;}
    if(currentCol>6){currentCol=6;}
    document.getElementById('d'+$this.id).style.left = (14+60*currentCol)+"px";
    document.getElementById('d'+$this.id).style.top = "-55px";
    }
  }
  document.onload = function(evt){
    if(currentPlayer == 1){
    currentCol = Math.floor((evt.clientX - board.offsetLeft)/60);
    if(currentCol<0){currentCol=0;}
    if(currentCol>6){currentCol=6;}
    document.getElementById('d'+$this.id).style.left = (14+60*currentCol)+"px";
    document.getElementById('d'+$this.id).style.top = "-55px";
    }
  }

  document.onclick = function(evt){
    if(currentPlayer == 1){
      if(possibleColumns().indexOf(currentCol) != -1){
        dropDisc($this.id,$this.player);
      }
    }
  }
}

function dropDisc(cid,player){
  currentRow = firstFreeRow(currentCol,player);
  moveit(cid,(14+currentRow*60));
  currentPlayer = player;
  checkForMoveVictory();

}

function checkForMoveVictory(){
  if(!checkForVictory(currentRow,currentCol)){
    placeDisc(3-currentPlayer);
  } else {
    var ww = currentPlayer == 2 ? ($('<img>',{src:'roneatingbanana.png'}, sound.play() )) : ($('<img>',{src:'happyron.png'}, happy.play() ));
    placeDisc(3-currentPlayer);

      $('.result').prepend(ww)
      $(board).hide();
      $(button).show();



    // $(".result").html(ww+ "")

    // document.location.reload()


    // board.innerHTML = "";
    // newgame();
  }
  if (ww = ($('<img>',{src:'happyron.png'}))) {
    snd.play()
  }



}

function placeDisc(player){
  currentPlayer = player;
  var disc = new Disc(player);
  disc.addToScene();
}

function prepareField(){
  gameField = new Array();
  for(var i=0; i<6; i++){
    gameField[i] = new Array();
    for(var j=0; j<7; j++){
      gameField[i].push(0);
    }
  }
}

function moveit(who,where){
    document.getElementById('d'+who).style.top = where+'px';
}



});
