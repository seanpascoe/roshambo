function userSelect(choice) {
  var bannerEl = document.getElementById("result-banner");
  bannerEl.classList = "col s12 white-text";
  var userChoice = choice;
  printChoice('user-choice', userChoice, 'User');
  compSelect(userChoice);
}

function compSelect(userChoice) {
  var choices = ["Rock", "Paper", "Scissors"];
  var randNum = Math.floor(Math.random()*3);
  var compChoice = choices[randNum];
  printChoice('comp-choice', compChoice, 'Life');
  roshambo(userChoice, compChoice);
}

function roshambo(user, comp) { roshambo: {
  if (user === comp) {
    tie();
    break roshambo;
  } else {
    switch (user) {
      case "Rock":
        if(comp === "Paper") {
          youLose();
        } else {
          youWin();
        }
        break;
      case "Paper":
        if(comp === "Scissors") {
          youLose();
        } else {
          youWin();
        }
        break;
      case "Scissors":
        if(comp === "Rock") {
          youLose();
        } else {
          youWin();
        }
        break;
    }
  }
}}

function youLose() {
  var el = document.getElementById("result");
  var bannerEl = document.getElementById("result-banner");
  el.innerHTML = '<i class="material-icons result-icons">thumb_down</i> You Lose!!';
  bannerEl.classList += " red darken-1";
  scoreUpdate("comp-score");
}

function youWin() {
  var el = document.getElementById("result");
  var bannerEl = document.getElementById("result-banner");
  el.innerHTML = '<i class="material-icons result-icons">thumb_up</i> You Win!!';
  bannerEl.classList += " green darken-1";
  scoreUpdate("user-score");
}

function tie() {
  var el = document.getElementById("result");
  var bannerEl = document.getElementById("result-banner");
  el.innerHTML = '<i class="material-icons result-icons">thumbs_up_down</i> It\'s a Tie';
  bannerEl.classList += " yellow darken-3"
}

function printChoice(playerID, choice, player) {
  var el = document.getElementById(playerID);
  el.innerHTML = "<small>" + player + ":</small> " + choice;
}

function scoreUpdate(player) {
  var scoreEl = document.getElementById(player);
  var score = Number(scoreEl.innerHTML);
  console.log(score);
  scoreEl.innerHTML = score + 1;
}
