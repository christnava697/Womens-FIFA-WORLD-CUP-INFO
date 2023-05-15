//Variables of lists
var years = getColumn("FIFA Women's World Cup Results", "Year");
var championsList = getColumn("FIFA Women's World Cup Results", "Champions");
var yearSelection = "1991";
var runnersupList = getColumn("FIFA Women's World Cup Results", "Runners-up");
var finalScore = getColumn("FIFA Women's World Cup Results", "Final score");

onEvent("championsButton", "click", function( ) {
  setScreen("championsScreen");
});

onEvent("yearDropdown", "change", function( ) {
  championsFilter();
});
//Filters championsList based on year, adds the champions with matching year and the final score 
function championsFilter() {
  var index = 0;
  yearSelection = getText("yearDropdown");
  for (var i = 0; i < years.length; i++) {
    if (yearSelection == years[i]) {
      index = i;
      setText("championsOutput",  championsList[i] + " was the winner of this world cup. " + "\n The final score was " + finalScore[i] ); 
    }
  }
}

onEvent("runnersupButton", "click", function( ) {
  setScreen("runnersupScreen");
});

onEvent("yeardropDown", "change", function( ) {
  runnersupFilter();
});
// Filters runnersupList based on year, adds the runners-up with matching year and the final score
function runnersupFilter() {
  yearSelection = getText("yeardropDown");
  for (var i = 0; i < years.length; i++) {
    if (yearSelection == years[i]) {
      setText("runnersupOutput", runnersupList[i] + " were the runners-up of this World cup." + "\n The final score was " + finalScore[i]);
    }
  }
}
onEvent("championshomeBtn", "click", function( ) {
  setScreen("homeScreen");
});

onEvent("runnersuphomeBtn", "click", function( ) {
  setScreen("homeScreen");
});


