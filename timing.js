let countdownEl = document.getElementById("countdown");
let count = 10;

let timer = setInterval(countdown, 1000); // run infinitely until clearInterval stops it

function countdown() {
  count--;
  countdownEl.innerHTML = count;
  if (count == 0) {
    clearInterval(timer);
    countdownEl.innerHTML = "blastoff";
  }
}
