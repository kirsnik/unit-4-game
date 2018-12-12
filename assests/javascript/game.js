var counter = 0;
var spacing = $("<div>");
var targetNumber = 53;

$("#number-to-guess").text(targetNumber);

var rupeeValue = [10, 5, 3, 7];
for (var i = 0; i < rupeeValue.length; i++) {

  var imageRupee = $("<img>");

  imageRupee.addClass("rupeeImage");

  imageRupee.attr("src", "assests/+images/GreenRupee.png");

  imageRupee.attr("data-crystalvalue", rupeeValue[i]);

  $("#rupee").append(imageRupee);
}

$(".rupeeImage").on("click", function() {

  var rupeePoint = ($(this).attr("data-crystalvalue"));
  rupeePoint = parseInt(rupeePoint);
  counter += rupeePoint;
  alert("New score: " + counter);

  if (counter === targetNumber) {
    alert("You win!");
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
  }

});
