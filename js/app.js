/* setup your angular app here */

// debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);

var app = angular.module('App', [])

app.controller('Ctrl', ['$scope', function($scope) {
  $scope.fruits2 = [];

  $scope.vegetables2 = [];

  $scope.produce = fruits.concat(vegetables);
  console.log("produce", $scope.produce)

  $scope.moveRight = function(idx) {
    $scope.vegetables2.push($scope.produce[idx])
    $scope.produce.splice(idx, 1);
  }

    $scope.moveLeft = function(idx) {
    $scope.fruits2.push($scope.produce[idx])
    $scope.produce.splice(idx, 1);
  }

  $scope.moveBackRight = function(idx) {
    $scope.produce.push($scope.fruits2[idx])
    $scope.fruits2.splice(idx, 1);
  }

  $scope.moveBackLeft = function(idx) {
    $scope.produce.push($scope.vegetables2[idx])
    $scope.vegetables2.splice(idx, 1);
  }

  $scope.checkWin = function() {
    sortedFruits = $scope.fruits2.sort()
    console.log(fruits);
    for(var i = 0; i <sortedFruits.length; i++) {
      if (sortedFruits[i] !== fruits[i] && $scope.produce == []) {
        console.log("false")
        return false;
      } else {
        console.log("true")
        return true;
      }
    }
  }

  // $scope.displayWinner = function(boolean) {

  // }


}]); // end
