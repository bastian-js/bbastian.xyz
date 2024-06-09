var textRightTop;
var textLeftTop;
var arrowLeftTop;
var arrowRightTop;

var textRightBottom;
var textLeftBottom;
var arrowLeftBottom;
var arrowRightBottom;

function changeColor(arrow, top) {
  textRightTop = document.getElementById("button-right-top");
  textLeftTop = document.getElementById("button-left-top");
  arrowLeftTop = document.getElementById("arrow-left-top");
  arrowRightTop = document.getElementById("arrow-right-top");

  textRightBottom = document.getElementById("button-right-bottom");
  textLeftBottom = document.getElementById("button-left-bottom");
  arrowLeftBottom = document.getElementById("arrow-left-bottom");
  arrowRightBottom = document.getElementById("arrow-right-bottom");

  if (arrow == "right" && top == true) {
    textRightTop.style.color = "#4287ef";
    arrowRightTop.style.color = "#4287ef";
  } else if (arrow == "left" && top == true) {
    textLeftTop.style.color = "#4287ef";
    arrowLeftTop.style.color = "#4287ef";
  } else if (arrow == "right" && top == false) {
    textRightBottom.style.color = "#4287ef";
    arrowRightBottom.style.color = "#4287ef";
  } else if (arrow == "left" && top == false) {
    textLeftTop.style.color = "#4287ef";
    arrowLeftTop.style.color = "#4287ef";
  }
}

function changeColorBack() {
  textRightTop = document.getElementById("button-right-top");
  textLeftTop = document.getElementById("button-left-top");
  arrowLeftTop = document.getElementById("arrow-left-top");
  arrowRightTop = document.getElementById("arrow-right-top");

  textRightBottom = document.getElementById("button-right-bottom");
  arrowRightBottom = document.getElementById("arrow-right-bottom");

  textRightTop.style.color = "#ffffff";
  arrowRightTop.style.color = "#ffffff";
  textLeftTop.style.color = "#ffffff";
  arrowLeftTop.style.color = "#ffffff";

  textRightBottom.style.color = "#ffffff";
  arrowRightBottom.style.color = "#ffffff";
}
