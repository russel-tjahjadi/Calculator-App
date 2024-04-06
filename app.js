(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");

  // differently: clear and button
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");

  // we check all the buttons to find which button was pressed
  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      // once clicked, the values will then be added to the screen
      let value = e.target.dataset.num;
      screen.value += value; // screen will then output each button's values
    });
  });

  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = ""; // Something wrong here...
    } else {
      let answer = eval(screen.value.replace("undefined", "")); //since there is an undefined
      screen.value = answer;
    }
  });

  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
})();
