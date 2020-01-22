function animateDice () {
  var i=0;
  var e=0;
  console.log ("Running");
  for (i=0; i<10; i++) {
    var elements = document.querySelectorAll ('img.active');
    console.log (elements);
    for (e = 0; e < elements.length; e++) {
      elements[e].classList.remove('active');
    }
    var rand1 = Math.floor (Math.random()*6 + 1); //Create random number1
    document.getElementById("diceL"+rand1).classList.add ('active'); //change dice face

    var rand2 = Math.floor (Math.random()*6 + 1); //Create random number2
    document.getElementById("diceR"+rand2).classList.add ('active'); //change dice face
  }

  if (rand1>rand2) {
    document.getElementById('title').innerHTML = "Player1 wins";
    document.getElementById('flag2').classList.remove ('active');
    document.getElementById('flag1').classList.add ('active');
  } else if (rand1 === rand2){
    document.getElementById('title').innerHTML = "Draw";
    document.getElementById('flag2').classList.add ('active');
    document.getElementById('flag1').classList.add ('active');
  } else {
    document.getElementById('title').innerHTML = "Player2 wins";
    document.getElementById('flag1').classList.remove ('active');
    document.getElementById('flag2').classList.add ('active');

  }

}
