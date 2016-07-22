  // Shuffle Game Array
  // $scope.shuffle = function(array) {
  //   produceArray = [];
  //   for(var i = 0; i < array; i++) {
  //     s = Math.floor(Math.random() * (array.length - 1));
  //     console.log("S", s, "AL2", array.length);
  //     tempArray.push(array[j]);
  //     array.splice(s, 1);
  //   }
  //   return tempArray;
  // }

  // Function to get Game Array of 5 random fruits and 5 random veggies
  $scope.gameStart = function(array1, array2) {
    counter = 5;
    var tempArray1 = [];
    var tempArray2 = [];

    var produceArray = [];

    for(var i = 0; i < counter; i++) {
      j = Math.floor(Math.random() * (array1.length - 1));
      k = Math.floor(Math.random() * (array2.length - 1));
      console.log("J", j, "AL2", array1.length);
      console.log("K", j, "AL2", array2.length);
      tempArray1.push(array1[j]);
      array1.splice(j, 1);

      tempArray2.push(array2[k]);
      array2.splice(k, 1);
    }
    $scope.fruitsPlay = tempArray1
    $scope.veggiesPlay = tempArray2

    var tempProduceArray = $scope.fruitsPlay.concat($scope.veggiesPlay);
    console.log("tempArray", tempProduceArray);

    var listLength = tempProduceArray.length

    for(var i = 0; i < tempProduceArray.length; i++) {
      s = Math.floor(Math.random() * (listLength - 1));
      console.log("S", s, "AL2", tempProduceArray.length);
      produceArray.push(tempProduceArray[s]);
      tempProduceArray.splice(s, 1);
      listLength -= 1;
    }

    console.log("produceArray", produceArray);
    console.log("fruitsPlay", tempArray1);
    console.log("veggiesPlay", tempArray2);

    return produceArray
  }






  //     if ($scope.win) {
  //       $scope.result = "You did it! All produce identified correctly"
  //     } else {
  //       $scope.result = "Not quite right. Try again."
  //     }
  //   } //end for loop
  // } //end checkWin

    //   if ((sortedFruits[i] !== fruits[i]) && (sortedVeggies[i] !== vegetables[i])) {
    //     console.log("false")
    //     // $scope.wrong = 'red';
    //     $scope.win = false
    //   } else if ((sortedFruits[i] === fruits[i]) && (sortedVeggies[i] === vegetables[i])) {
    //     console.log("true")
    //     $scope.win = true;
    //     // $scope.wrong = 'green';
    //   }
    // }
    // if ($scope.win) {
    //   $scope.result = "You did it! All produce identified correctly"
    // } else {
    //   $scope.result = "Not quite right. Try again."
    // }



    // Mapped Fruits
    var mappedFruits = fruits.map(function(element) {
      return {
        name: element,
        type: 'fruit'
      }
    })

    // Mapped Veggies
    var mappedVeggies = vegetables.map(function(element) {
      return {
        name: element,
        type: 'veggie'
      }
    })

  $scope.produce = shuffle(mappedVeggies.concat(mappedFruits));

  // !!! fisher-yates shuffle !!!!

  // update HTML to use fruit.name and veggie.name
