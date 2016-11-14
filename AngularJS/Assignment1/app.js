(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LCController', LCController);

LCController.$inject = ['$scope'];
function LCController($scope){
  $scope.list = "";
  $scope.message = "";

  $scope.checkTooMuch = function(){

    var trimList = $scope.list.trim();

    var splitList = trimList.split(',');

    if(splitList[0].length == 0){
    $scope.message = "Please enter data first";
    $scope.messageColor = "red";
    $scope.boxColor = "red";
    }
    else if(splitList.length <= 3){
    $scope.message = "Enjoy!";
    $scope.messageColor = "green";
    $scope.boxColor = "green";
    }
    else{
      $scope.message = "Too much!";
      $scope.messageColor = "green";
    }

  }
  };

})();
