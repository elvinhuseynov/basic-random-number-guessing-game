var playersGuess = 0;
var randomNumb = 0;

function tenNumbers() {
  //random number
  randomNumb = Math.floor(Math.random() * 10 + 1);

  //win or lose
  document.getElementById("input-box").style.display = "none";

  //player starts
  for (let index = 0; index < 3; index++) {
    //player's guess is bigger than random number?
    if (playersGuess > randomNumb) {
      playersGuess = Number(prompt("Down"));
    }
    //player's guess is smaller than random number?
    else if (playersGuess < randomNumb) {
      playersGuess = Number(prompt("Up"));
    }
    //player wins
    else if (playersGuess == randomNumb) {
      //changing input box with js
      document.getElementById("input").value = randomNumb;

      //making unvisible divs visible
      document.getElementById("text2").style.display = "block";
      document.getElementById("win").style.display = "block";
      break;
    }

    //player's chances over
    if (index == 2) {
      //changing input box with js
      document.getElementById("input").value = randomNumb;

      //making unvisible divs visible
      document.getElementById("text2").style.display = "block";
      document.getElementById("lose").style.display = "block";
    }
  }
}
function hundredNumbers() {
  //same things with in 100 range
  randomNumb = Math.floor(Math.random() * 100 + 1);
  document.getElementById("input-box").style.display = "none";
  for (let index = 0; index < 9; index++) {
    if (playersGuess > randomNumb) {
      playersGuess = Number(prompt("Down"));
    } else if (playersGuess < randomNumb) {
      playersGuess = Number(prompt("Up"));
    } else if (playersGuess == randomNumb) {
      document.getElementById("input").value = randomNumb;
      document.getElementById("text2").style.display = "block";
      document.getElementById("win").style.display = "block";
      break;
    }
    if (index == 2) {
      document.getElementById("input").value = randomNumb;
      document.getElementById("text2").style.display = "block";
      document.getElementById("lose").style.display = "block";
    }
  }
}
