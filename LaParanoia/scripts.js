var i = 0;
var txt = "brb - looking for my sissors...";
var speed = 50;

window.onload = function typeWriter() {
  if (i < txt.length) {
    setTimeout(typeWriter, speed);
    document.getElementById('type').innerHTML += txt.charAt(i);
    i++;
  }
}