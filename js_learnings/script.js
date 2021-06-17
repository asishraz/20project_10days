// todo Making a simple expense tracker using JS first

//? its time to show the dynamic value while adding and removing

function increment() {
  var number = document.getElementById("number").value;
  let amount = document.getElementById("amount").value;
  console.log(number);
  amount.innerHTML = "hello";
}

function decrement() {
  var number = document.getElementById("number").value;
  console.log(number);
}

//todo always use log to see, where you are going
// value is getting captured, apply same for decrement
// todo now the amount should reflect on the top
