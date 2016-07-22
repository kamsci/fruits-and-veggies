/* setup your angular app here */

// debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);

var app = angular.module('App', [])

app.controller('Ctrl', ['$scope', function($scope) {
  //  empty answer arrays
  $scope.fruitsAnswers = [];

  $scope.vegetablesAnswers = [];

  // Combo array of fruits and veggies
  $scope.comboArray = fruits.concat(vegetables);
  // console.log("combo", $scope.comboArray)

  // Empty Game arrays
  // $scope.fruitsPlay = [];
  // $scope.veggiesPlay = [];

  // Start the game without a win and wintout wrong class on veggies
  $scope.win = null;
  $scope.wrong = null;

  // Message div at the top of the game starts empty
  $scope.result = null;

  // Start game process
  $scope.gameStart = function() {
    counter = 10;

    var array1 = fruits;
    var array2 = vegetables;

    var tempArray = $scope.comboArray;
    // var tempArray2 = [];

    var produceArray = [];

    for(var i = 0; i < counter; i++) {
      j = Math.floor(Math.random() * (tempArray.length - 1));
      console.log("J", j, "AL2", tempArray.length);

      produceArray.push(tempArray[j]);
      tempArray.splice(j, 1);
    }
    console.log("produceArray", produceArray);
    return produceArray;
  }

  // Set Game Array
  $scope.produce = $scope.gameStart();

  // Create movement of items on board
  $scope.moveRight = function(idx) {
    $scope.result = null;
    $scope.vegetablesAnswers.push($scope.produce[idx])
    $scope.produce.splice(idx, 1);
  }

    $scope.moveLeft = function(idx) {
    $scope.result = null;
    $scope.fruitsAnswers.push($scope.produce[idx])
    $scope.produce.splice(idx, 1);
  }

  $scope.moveBackRight = function(idx) {
    $scope.result = null;
    $scope.produce.push($scope.fruitsAnswers[idx])
    $scope.fruitsAnswers.splice(idx, 1);
  }

  $scope.moveBackLeft = function(idx) {
    $scope.result = null;
    $scope.produce.push($scope.vegetablesAnswers[idx])
    $scope.vegetablesAnswers.splice(idx, 1);
  }

  // When 'Did I win?' button pressed, check for winning answers
  $scope.checkWin = function() {
    console.log("clicked");

    fruitWin = null;
    vegWin = null;

    angular.forEach($scope.fruitsAnswers, function(fruit) {
      if(fruits.indexOf(fruit, 0) > -1) {
        // logic to make items red here
        fruitWin = false;
        var index1 = indexOf(fruit, 0);
      }
      console.log("fruit", index1);
    }) // end fruit loop

    angular.forEach($scope.vegetablesAnswers, function(veg) {
      if(vegetables.indexOf(veg, 0) > -1) {
        // logic to make items red here
        vegWin = false;
        var index2 = indexOf(veg, 0)
      }
      console.log("veg", index2);
    }) // end veg loop

    if(!fruitWin && !vegWin) {
      $scope.win = false;
      $scope.result = "Not quite right. Try again."
    } else {
      $scope.win = true;
      $scope.result = "You did it! All produce identified correctly"
    }
  }// end check win

}]); // end
