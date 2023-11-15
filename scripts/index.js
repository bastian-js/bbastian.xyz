var textRight;
var textLeft;
var arrowLeft;
var arrowRight;

function changeColor(arrow) {
  textRight = document.getElementById("button-right");
  textLeft = document.getElementById("button-left");
  arrowLeft = document.getElementById("arrow-left");
  arrowRight = document.getElementById("arrow-right");

  if (arrow == "right") {
    textRight.style.color = "#4287ef";
    arrowRight.style.color = "#4287ef";
  } else if (arrow == "left") {
    textLeft.style.color = "#4287ef";
    arrowLeft.style.color = "#4287ef";
  }
}

function changeColorBack() {
  textRight = document.getElementById("button-right");
  textLeft = document.getElementById("button-left");
  arrowLeft = document.getElementById("arrow-left");
  arrowRight = document.getElementById("arrow-right");

  textRight.style.color = "#ffffff";
  arrowRight.style.color = "#ffffff";
  textLeft.style.color = "#ffffff";
  arrowLeft.style.color = "#ffffff";
}
