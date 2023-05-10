let calcField = document.getElementById("num1");
let calculateButton = document.getElementById("submit");

calculateButton.addEventListener("click", function() {
  let equation = calcField.value;
  let result = 0;
  try {
    result = eval(equation);
    alert("The result is: " + result);
  } catch (e) {
    alert("Invalid equation");
  }
});