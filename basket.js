let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let scoreHome = 0;
let scoreGuest = 0;

function newGame() {
  scoreHome = 0;
  scoreGuest = 0;
  homeScore.textContent = scoreHome;
  guestScore.textContent = scoreGuest;
  homeScore.style.color = "rgb(223, 87, 87)";
  guestScore.style.color = "rgb(223, 87, 87)";
}

function home1() {
  scoreHome = scoreHome + 1;
  homeScore.textContent = scoreHome;
  updateScore();
}

function home2() {
  scoreHome = scoreHome + 2;
  homeScore.textContent = scoreHome;
  updateScore();
}

function home3() {
  scoreHome = scoreHome + 3;
  homeScore.textContent = scoreHome;
  updateScore();
}

function guest1() {
  scoreGuest = scoreGuest + 1;
  guestScore.textContent = scoreGuest;
  updateScore();
}

function guest2() {
  scoreGuest = scoreGuest + 2;
  guestScore.textContent = scoreGuest;
  updateScore();
}

function guest3() {
  scoreGuest = scoreGuest + 3;
  guestScore.textContent = scoreGuest;
  updateScore();
}

function updateScore() {
  homeScore.textContent = scoreHome;
  guestScore.textContent = scoreGuest;
  if (scoreHome > scoreGuest) {
    homeScore.style.color = "rgb(208, 46, 46)";
    guestScore.style.color = "rgb(223, 87, 87)";
  } else if (scoreHome < scoreGuest) {
    guestScore.style.color = "rgb(208, 46, 46)";
    homeScore.style.color = "rgb(223, 87, 87)";
  } else {
    homeScore.style.color = "rgb(223, 87, 87)";
    guestScore.style.color = "rgb(223, 87, 87)";
  }
}
