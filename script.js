let currentQuestion = 1;
let answer1 = false;
let answer2 = false;
let answer3 = false;
let answer4 = false;
let answer5 = false;

document.getElementById("questions-container").innerHTML = q1;

document.getElementById("first-e").addEventListener("click", changeToFirst);
document.getElementById("Calculate").addEventListener("click", calculate);

function changeToFirst() {
  let vi = +document.getElementById("v-initial").value;
  let vf = +document.getElementById("v-final").value;
  let a = +document.getElementById("var-a").value;
  let t = +document.getElementById("var-t").value;
  let x = +document.getElementById("var-x").value;

  document.getElementById("x-span").innerHTML = "";
  document.getElementById("t-span").innerHTML = "t =";
  document.getElementById("a-span").innerHTML = "a =";
  document.getElementById("vi-span").innerHTML = "vi(m/s) =";
  document.getElementById("vf-span").innerHTML = "";
  document.getElementById("var-x").type = "hidden";
  document.getElementById("var-t").type = "number";
  document.getElementById("var-a").type = "number";
  document.getElementById("v-final").type = "hidden";
  document.getElementById("v-initial").type = "number";

  document.getElementById("topimg").src = "images/Kinematics1.jpg";
  document.getElementById("e-text").innerHTML = "Equation #1";
  vi = "";
}

function calculate() {
  let vi = +document.getElementById("v-initial").value;
  let vf = +document.getElementById("v-final").value;
  let a = +document.getElementById("var-a").value;
  let t = +document.getElementById("var-t").value;

  let answer = vi + a * t;

  document.getElementById("answr").innerHTML = answer + "m/s";
  document.getElementById("v-initial").value = "";
  document.getElementById("v-final").value = "";
  document.getElementById("var-a").value = "";
  document.getElementById("var-t").value = "";
  document.getElementById("var-x").value = "";
}

// calculate #2
document.getElementById("second-e").addEventListener("click", changeToSecond);

function changeToSecond() {
  document.getElementById("t-span").innerHTML = "";
  document.getElementById("x-span").innerHTML = "Δx =";
  document.getElementById("a-span").innerHTML = "a =";
  document.getElementById("vi-span").innerHTML = "vi(m/s) =";
  document.getElementById("vf-span").innerHTML = "";
  document.getElementById("var-t").type = "hidden";
  document.getElementById("var-x").type = "number";
  document.getElementById("var-a").type = "number";
  document.getElementById("v-final").type = "hidden";
  document.getElementById("v-initial").type = "number";
  document.getElementById("topimg").src = "images/kinematics2.jpg";
  document.getElementById("e-text").innerHTML = "Equation #2";
  document.getElementById("button-set-1").style.display = "block";
}

document.getElementById("Calculate-2").addEventListener("click", calculateTwo);

function calculateTwo() {
  let vi = +document.getElementById("v-initial").value;
  let vf = +document.getElementById("v-final").value;
  let a = +document.getElementById("var-a").value;
  let x = +document.getElementById("var-x").value;

  let answer2 = vi ** 2 + 2 * a * x;

  document.getElementById("answr").innerHTML = answer2 + "m/s²";
  document.getElementById("v-initial").value = "";
  document.getElementById("v-final").value = "";
  document.getElementById("var-a").value = "";
  document.getElementById("var-t").value = "";
  document.getElementById("var-x").value = "";
}

// Calculate #3

document.getElementById("third-e").addEventListener("click", changeToThird);

function changeToThird() {
  document.getElementById("t-span").innerHTML = "t = ";
  document.getElementById("x-span").innerHTML = "";
  document.getElementById("a-span").innerHTML = "a =";
  document.getElementById("vi-span").innerHTML = "vi(m/s) =";
  document.getElementById("vf-span").innerHTML = "";
  document.getElementById("var-t").type = "number";
  document.getElementById("var-x").type = "hidden";
  document.getElementById("var-a").type = "number";
  document.getElementById("v-final").type = "hidden";
  document.getElementById("v-initial").type = "number";
  document.getElementById("topimg").src = "images/kinematics3.jpg";
  document.getElementById("e-text").innerHTML = "Equation #3";
  document.getElementById("button-set-1").style.display = "block";
}

document
  .getElementById("Calculate-3")
  .addEventListener("click", calculateThree);

function calculateThree() {
  let vi = +document.getElementById("v-initial").value;
  let vf = +document.getElementById("v-final").value;
  let a = +document.getElementById("var-a").value;
  let x = +document.getElementById("var-x").value;
  let t = +document.getElementById("var-t").value;

  let answer3 = vi * t + (1 / 2) * (a * t ** 2);

  document.getElementById("answr").innerHTML = answer3 + "m";
  document.getElementById("v-initial").value = "";
  document.getElementById("v-final").value = "";
  document.getElementById("var-a").value = "";
  document.getElementById("var-t").value = "";
  document.getElementById("var-x").value = "";
}

// Calculate #4

document.getElementById("fourth-e").addEventListener("click", changeToFourth);

function changeToFourth() {
  document.getElementById("t-span").innerHTML = "t = ";
  document.getElementById("x-span").innerHTML = " ";
  document.getElementById("a-span").innerHTML = "";
  document.getElementById("vi-span").innerHTML = "vi(m/s) =";
  document.getElementById("vf-span").innerHTML = "vf(m/s) =";
  document.getElementById("var-t").type = "number";
  document.getElementById("var-x").type = "hidden";
  document.getElementById("var-a").type = "hidden";
  document.getElementById("v-final").type = "number";
  document.getElementById("v-initial").type = "number";
  document.getElementById("topimg").src = "images/kinematics4.jpg";
  document.getElementById("e-text").innerHTML = "Equation #4";
  document.getElementById("button-set-1").style.display = "block";
}

document.getElementById("Calculate-4").addEventListener("click", calculateFour);

function calculateFour() {
  let vi = +document.getElementById("v-initial").value;
  let vf = +document.getElementById("v-final").value;
  let a = +document.getElementById("var-a").value;
  let x = +document.getElementById("var-x").value;
  let t = +document.getElementById("var-t").value;

  let answer4 = (1 / 2) * (vi + vf) * t;

  document.getElementById("answr").innerHTML = answer4 + "m";
  document.getElementById("v-initial").value = "";
  document.getElementById("v-final").value = "";
  document.getElementById("var-a").value = "";
  document.getElementById("var-t").value = "";
  document.getElementById("var-x").value = "";
}

document.getElementById("first-e").addEventListener("click", first);

function first() {
  document.getElementById("button-set-1").style.display = "block";
}

// QUIZ

// quiz
let rand1 = +Math.floor(Math.random() * 100);
let rand2 = +Math.floor(Math.random() * 100);
let rand3 = +Math.floor(Math.random() * 100);
let rand4 = +Math.floor(Math.random() * 100);
let rand5 = +Math.floor(Math.random() * 100);
let rand6 = +Math.floor(Math.random() * 100);
let rand7 = +Math.floor(Math.random() * 100);
let rand8 = +Math.floor(Math.random() * 100);
let rand9 = +Math.floor(Math.random() * 100);
let rand10 = +Math.floor(Math.random() * 100);
let rand11 = +Math.floor(Math.random() * 100);
let rand12 = +Math.floor(Math.random() * 100);
let rand13 = +Math.floor(Math.random() * 100);
let rand14 = +Math.floor(Math.random() * 100);

let randPower = +Math.floor(Math.random() * 4);
var num1 = Math.floor(Math.random() * 100);

document.getElementById("n1").innerHTML = num1;
document.getElementById("n2").innerHTML = rand1;

document.getElementById("check").addEventListener("click", quizShow);

function quizShow() {
  // q1
  if (currentQuestion == 1) {
    let display1 = document.getElementById("in1").value;
    let n1 = +document.getElementById("n1").innerHTML;
    let n2 = +document.getElementById("n2").innerHTML;

    let correctAnswer = (1 / 2) * n1 * n2 ** 2;

    console.log(correctAnswer);
    console.log(display1);

    if (display1 == correctAnswer) {
      answer1 = true;

      document.getElementById("check-2").innerHTML = "Correct!";

      let countdownEl = document.getElementById("countdown");
      let count = 10;

      let timer = setInterval(countdown, 1000);

      function countdown() {
        count--;
        countdownEl.innerHTML = count;
        if (count == 0) {
          clearInterval(timer);
          // change to new question
          currentQuestion = 2;
          document.getElementById("questions-container").innerHTML = q2;
          document.getElementById("n3").innerHTML = rand2;
          document.getElementById("n4").innerHTML = rand3;
          document.getElementById("countdown").innerHTML = "10";
          document.getElementById("check-2").innerHTML = "";
        }
      }
    } else {
      answer1 = false;

      document.getElementById("check-2").innerHTML = "Incorrect!";

      let countdownEl = document.getElementById("countdown");
      let count = 10;

      let timer = setInterval(countdown, 1000);

      function countdown() {
        count--;
        countdownEl.innerHTML = count;
        if (count == 0) {
          clearInterval(timer);
          // change to new question
          currentQuestion = 2;
          document.getElementById("questions-container").innerHTML = q2;
          document.getElementById("n3").innerHTML = rand2;
          document.getElementById("n4").innerHTML = rand3;

          document.getElementById("countdown").innerHTML = "10";
          document.getElementById("check-2").innerHTML = "";
        }
      }
    }
  }

  // QUESTION NUMBER 2

  if (currentQuestion == 2) {
    // q2
    let display2 = document.getElementById("in2").value;
    let n3 = document.getElementById("n3").innerHTML;
    let n4 = document.getElementById("n4").innerHTML;

    let correctAnswer2 = (1 / 2) * n3 ** 2;
    let correctAnswer22 = correctAnswer2 / n4;

    if (display2 == correctAnswer22) {
      answer2 = true;
      document.getElementById("check-2").innerHTML = "Correct!";

      let countdownEl = document.getElementById("countdown");
      let count = 10;

      let timer = setInterval(countdown, 1000);

      function countdown() {
        count--;
        countdownEl.innerHTML = count;
        if (count == 0) {
          clearInterval(timer);
          // change to new question
          // change to new question
          currentQuestion = 3;
          document.getElementById("questions-container").innerHTML = q3;
          document.getElementById("n5").innerHTML = rand4;
          document.getElementById("countdown").innerHTML = "10";
          document.getElementById("check-2").innerHTML = "";
        }
      }
    } else {
      answer2 = false;

      document.getElementById("check-2").innerHTML = "Incorrect!";

      let countdownEl = document.getElementById("countdown");
      let count = 10;

      let timer = setInterval(countdown, 1000);

      function countdown() {
        count--;
        countdownEl.innerHTML = count;
        if (count == 0) {
          clearInterval(timer);
          // change to new question
          currentQuestion = 3;
          document.getElementById("questions-container").innerHTML = q3;
          document.getElementById("n5").innerHTML = rand4;
          document.getElementById("countdown").innerHTML = "10";
          document.getElementById("check-2").innerHTML = "";
        }
      }
    }
  }

  if (currentQuestion == 3) {
    // q3
    let display3 = document.getElementById("in3").value;
    let n5 = document.getElementById("n5").innerHTML;

    let correctAnswer3 = 0 + (1 / 2) * -9.8 * n5 ** 2;

    if (display3 == correctAnswer3) {
      answer3 = true;
      document.getElementById("check-2").innerHTML = "Correct!";

      let countdownEl = document.getElementById("countdown");
      let count = 10;

      let timer = setInterval(countdown, 1000);

      function countdown() {
        count--;
        countdownEl.innerHTML = count;
        if (count == 0) {
          clearInterval(timer);
          // change to new question
          currentQuestion = 4;
          document.getElementById("questions-container").innerHTML = q4;
          document.getElementById("n6").innerHTML = rand5;
          document.getElementById("n7").innerHTML = rand6;
          document.getElementById("countdown").innerHTML = "10";
          document.getElementById("check-2").innerHTML = "";
        }
      }
    } else {
      answer3 = false;

      document.getElementById("check-2").innerHTML = "Incorrect!";

      let countdownEl = document.getElementById("countdown");
      let count = 10;

      let timer = setInterval(countdown, 1000);

      function countdown() {
        count--;
        countdownEl.innerHTML = count;
        if (count == 0) {
          clearInterval(timer);
          // change to new question
          currentQuestion = 4;
          document.getElementById("questions-container").innerHTML = q4;
          document.getElementById("n6").innerHTML = rand5;
          document.getElementById("n7").innerHTML = rand6;
          document.getElementById("countdown").innerHTML = "10";
          document.getElementById("check-2").innerHTML = "";
        }
      }
    }
  }

  if (currentQuestion == 4) {
    // q4
    let display4 = document.getElementById("in4").value;
    let n7 = document.getElementById("n7").innerHTML;
    let n8 = document.getElementById("n8").innerHTML;

    let correctAnswer4 = (1 / 2) * n6 * n7;

    if (display4 == correctAnswer4) {
      answer4 = true;
      document.getElementById("check-2").innerHTML = "Correct!";

      let countdownEl = document.getElementById("countdown");
      let count = 10;

      let timer = setInterval(countdown, 1000);

      function countdown() {
        count--;
        countdownEl.innerHTML = count;
        if (count == 0) {
          clearInterval(timer);
          // change to new question
          currentQuestion = 5;
          document.getElementById("questions-container").innerHTML = q5;
          document.getElementById("n8").innerHTML = rand7;
          document.getElementById("n9").innerHTML = rand8;
          document.getElementById("countdown").innerHTML = "10";
          document.getElementById("check-2").innerHTML = "";
        }
      }
    } else {
      answer4 = false;

      document.getElementById("check-2").innerHTML = "Incorrect!";

      let countdownEl = document.getElementById("countdown");
      let count = 10;

      let timer = setInterval(countdown, 1000);

      function countdown() {
        count--;
        countdownEl.innerHTML = count;
        if (count == 0) {
          clearInterval(timer);
          // change to new question
          currentQuestion = 5;
          document.getElementById("questions-container").innerHTML = q5;
          document.getElementById("n8").innerHTML = rand7;
          document.getElementById("n9").innerHTML = rand8;
          document.getElementById("countdown").innerHTML = "10";
          document.getElementById("check-2").innerHTML = "";
        }
      }
    }
  }

  if (currentQuestion == 5) {
    // q5
    let display5 = document.getElementById("in5").value;
    let n9 = document.getElementById("n9").innerHTML;

    let correctAnswer5 = n8 / n9 / 2;

    if (display5 == correctAnswer5) {
      answer5 = true;
    } else {
      answer5 = false;
      document.getElementById("check-2").innerHTML = "Correct!";

      document.getElementById("check-2").innerHTML = "Incorrect!";

      let countdownEl = document.getElementById("countdown");
      let count = 10;

      let timer = setInterval(countdown, 1000);

      function countdown() {
        count--;
        countdownEl.innerHTML = count;
        if (count == 0) {
          clearInterval(timer);
          // change to new question
          currentQuestion = 1;
          document.getElementById("questions-container").innerHTML = q1;

          document.getElementById("countdown").innerHTML = "10";
          document.getElementById("check-2").innerHTML = "";
        }
      }
    }
  }

  document.getElementById("reload").addEventListener("click", reloadPage);

  function reloadPage() {
    window.location.reload();
  }
}
