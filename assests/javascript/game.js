var targetNumber = [];
var wins = 0;
var losses = 0;
var counter = 0;
$("#counter").text(counter);
$("#wins").text(wins);
$("#losses").text(losses);
$("#targetNumber").text(targetNumber);

function getRupeeValues() {
  var rupeeValues = [];
  for (var i = 0; i < 4; i++) {
    var rupeePoint = Math.floor(Math.random() * 25) + 5;
    (rupeeValues).push(rupeePoint);
    console.log(rupeePoint + " second")

    var imageRupee = $("<img>");
    imageRupee.addClass("rupeeImage");
    imageRupee.attr("src", "assests/images/GreenRupee.png");
    imageRupee.attr("data-rupeeValue", rupeeValues[i]);
    console.log()
    $("#rupee").append(imageRupee);
    console.log(rupeeValues + " inside randVal");


  }
  return rupeePoint;
}

var rupeePoint = getRupeeValues();{
  var randIndex1 = rupeePoint;
  var randIndex2 = rupeePoint;
}


function randVal(){
  var targetNumber = [];{
      var possnumb = +randIndex1 + +randIndex2;
      targetNumber.push(possnumb);
      console.log(targetNumber + " under randval");

    }
    console.log(randIndex1 + "ran1");
    console.log(randIndex2 + "ran2");
    return targetNumber;
  }

  


targetNumber = randVal();
console.log(targetNumber + " outside");
  
$("#targetNumber").text(targetNumber);















$("#rupee").on("click", ".rupeeImage", function match() {
  var rupeePoint = ($(this).attr("data-rupeeValue"));
  counter += parseInt(rupeePoint);
  console.log(rupeePoint);
  document.getElementById("counter").innerHTML = counter;
  //console.log(counter);

  if (counter == targetNumber) {
    alert("You win!");
    wins = wins + 1;
    resetVariables();
    startGame();

  } else if (counter >= targetNumber) {
    alert("You lose!!");
    losses = losses + 1;
    resetVariables();
    startGame();
  }

  //function to show wins
  function showWins() {
    $("#wins").text(wins);
  }

  //function to show losses

  function showLosses() {
    $("#losses").text(losses);
  }


  function resetVariables() {
    counter = 0;
    $("#counter").text(counter);
    $("#rupee").empty();
    rupeePoint = getRupeeValues();
    $("#targetNumber").empty();
    targetNumber = [];
    $("#targetNumber").text(targetNumber);
    randVal();
    targetNumber = randVal();





  }

  function startGame() {
    showWins();
    showLosses();
  }


  startGame();
});