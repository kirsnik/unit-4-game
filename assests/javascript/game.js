
    var wins = 0;
    var losses = 0;
    var targetNumber = [];
    var counter = 0;

    $("#number-to-guess").text(targetNumber);
    $("#counter").text(counter);
    $("#wins").text(wins);
    $("#losses").text(losses);


    function getRupeeValues() {
      var rupeeValues = [];
      for(var i = 0; i < 4; i++) {
          var rupeePoint = Math.floor(Math.random() * 25) + 1;
          rupeeValues.push(rupeePoint);

          var imageRupee = $("<img>");
          imageRupee.addClass("rupeeImage");
          imageRupee.attr("src", "assests/images/GreenRupee.png");
          imageRupee.attr("data-rupeeValue", rupeeValues[i]);
          console.log()
          $("#rupee").append(imageRupee);
      }
      console.log(rupeeValues + " inside");
      return rupeePoint;
  }
  
  var rupeePoint = getRupeeValues();
  console.log()

  

  function possNum() {
    
    var randIndex1 = Math.floor(Math.random() * rupeePoint.length);
    var randIndex2 = Math.floor(Math.random() * rupeePoint.length);
    var targetValue = rupeePoint[randIndex1] + rupeePoint[randIndex2];

    return rupeePoint;
  }

  var targetNumber = possNum();


  
console.log(targetNumber);


   

$("#rupee").on("click", ".rupeeImage", function match() {
  var rupeePoint = ($(this).attr("data-rupeeValue"));
  counter += parseInt(rupeePoint);
  console.log(rupeePoint);
  document.getElementById("counter").innerHTML = counter;
  //console.log(counter);

    if (counter === targetNumber) {
      alert("You win!");
      wins = wins + 1;
      resetVariables();
      startGame();
  
    }
  
    else if (counter >= targetNumber) {
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
  // clear image tags and then call getRupeeValue ()
  // OR separate the image generation and the number allocation in 2 fncts and then only call the numberGen function to fill in the new numbers
$("#rupee").empty();
rupeePoint = getRupeeValues();


}

function startGame() {
  showWins();
  showLosses();
}


startGame();

  

})




