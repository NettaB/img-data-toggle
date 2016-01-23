// Code goes here
var myApp = angular.module('myApp', []);

myApp.controller('mainCtrl', ['$scope', function($scope){
  
  $scope.message = 'It\'s alive!';
}]);
