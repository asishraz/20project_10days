var images = [
  "http://www.sololearn.com/uploads/slider/1.jpg",
  "http://www.sololearn.com/uploads/slider/2.jpg",
  "http://www.sololearn.com/uploads/slider/3.jpg",
];

var num = 0;

function next() {
  var slider = document.getElementById("slider");
  num++;
  if (num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
}

function prev() {
  var slider = document.getElementById("slider");
  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  slider.src = images[num];
}

function validate() {
  var n1 = document.getElementById("num1");
  var n2 = document.getElementById("num2");
  if (n1.value !== "" && n2.value !== "") {
    if (n1.value === n2.value) {
      return true;
    }
  }
  alert("The value should be equal and not left blank");
  return false;
}

function color() {
  var p2 = document.getElementById("p2");
  p2.style.color = "red";
}
