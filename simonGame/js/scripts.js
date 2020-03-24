function animateDice () {
  var i=0;
  var e=0;
  var count=0;
  var diceFace =[];
  console.log ("Running");
  animation = setInterval ( function faceChange () {
    console.log ("iteration " + count)
    count++;
    // Picks elements to remove
    var elements = document.querySelectorAll ('.dice.active');
    console.log (elements);
    //Removes elements from array
    for (e = 0; e < elements.length; e++) {
      elements[e].classList.remove('active');
    }
    //Creates random number and adds new img
    var rand1 = Math.floor (Math.random()*6 + 1); //Create random number1
    document.getElementById("diceL"+rand1).classList.add ('active'); //change dice face

    var rand2 = Math.floor (Math.random()*6 + 1); //Create random number2
    document.getElementById("diceR"+rand2).classList.add ('active'); //change dice face
    diceFace = [rand1,rand2];
    if (count>=10) {
      clearInterval(animation);
      console.log (diceFace);
      //Compare to show winner or draw
      if (diceFace[0]>diceFace[1]) {
        document.getElementById('title').innerHTML = "Player1 wins";
        document.getElementById('flag2').classList.remove ('active');
        document.getElementById('flag1').classList.add ('active');
      } else if (diceFace[0] === diceFace[1]){
        document.getElementById('title').innerHTML = "Draw";
        document.getElementById('flag2').classList.add ('active');
        document.getElementById('flag1').classList.add ('active');
      } else {
        document.getElementById('title').innerHTML = "Player2 wins";
        document.getElementById('flag1').classList.remove ('active');
        document.getElementById('flag2').classList.add ('active');
      }
    }
  }, 100);
}
